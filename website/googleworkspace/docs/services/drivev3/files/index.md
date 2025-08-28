--- 
title: files
hide_title: false
hide_table_of_contents: false
keywords:
  - files
  - drivev3
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>files</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.files" /></td></tr>
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
    <td>The ID of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.</td>
</tr>
<tr>
    <td><CopyableCode code="appProperties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.</td>
</tr>
<tr>
    <td><CopyableCode code="contentHints" /></td>
    <td><code>object</code></td>
    <td>Additional information about the content of the file. These fields are never populated in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="contentRestrictions" /></td>
    <td><code>array</code></td>
    <td>Restrictions for accessing the content of the file. Only populated if such a restriction exists.</td>
</tr>
<tr>
    <td><CopyableCode code="copyRequiresWriterPermission" /></td>
    <td><code>boolean</code></td>
    <td>Whether the options to copy, print, or download this file, should be disabled for readers and commenters.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadRestrictions" /></td>
    <td><code>object</code></td>
    <td>Download restrictions applied on the file. (id: DownloadRestrictionsMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="explicitlyTrashed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorRgb" /></td>
    <td><code>string</code></td>
    <td>The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.</td>
</tr>
<tr>
    <td><CopyableCode code="fullFileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.</td>
</tr>
<tr>
    <td><CopyableCode code="hasAugmentedPermissions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="hasThumbnail" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.</td>
</tr>
<tr>
    <td><CopyableCode code="headRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="iconLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A static, unauthenticated link to the file's icon.</td>
</tr>
<tr>
    <td><CopyableCode code="imageMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about image media, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="isAppAuthorized" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file was created or opened by the requesting app.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`. (default: drive#file)</td>
</tr>
<tr>
    <td><CopyableCode code="labelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. An overview of the labels on the file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="linkShareMetadata" /></td>
    <td><code>object</code></td>
    <td>Contains details about the link URLs that clients are using to refer to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been modified by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was modified by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="ownedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user owns the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of permission IDs for users with access to this file.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A key needed to access the item via a shared link.</td>
</tr>
<tr>
    <td><CopyableCode code="sha1Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="sha256Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been shared. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWithMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was shared with the user, if applicable (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="sharingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutDetails" /></td>
    <td><code>object</code></td>
    <td>Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.create` requests.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.</td>
</tr>
<tr>
    <td><CopyableCode code="starred" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has starred the file.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Output only. Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies, consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailVersion" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The thumbnail version for use in thumbnail cache invalidation.</td>
</tr>
<tr>
    <td><CopyableCode code="trashed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.</td>
</tr>
<tr>
    <td><CopyableCode code="trashedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="trashingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="videoMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about video media. This may not be available immediately upon upload.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been viewed by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was viewed by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="viewersCanCopyContent" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated: Use `copyRequiresWriterPermission` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="webContentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="webViewLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for opening the file in a relevant Google editor or viewer in a browser.</td>
</tr>
<tr>
    <td><CopyableCode code="writersCanShare" /></td>
    <td><code>boolean</code></td>
    <td>Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.</td>
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
    <td>The ID of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.</td>
</tr>
<tr>
    <td><CopyableCode code="appProperties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.</td>
</tr>
<tr>
    <td><CopyableCode code="contentHints" /></td>
    <td><code>object</code></td>
    <td>Additional information about the content of the file. These fields are never populated in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="contentRestrictions" /></td>
    <td><code>array</code></td>
    <td>Restrictions for accessing the content of the file. Only populated if such a restriction exists.</td>
</tr>
<tr>
    <td><CopyableCode code="copyRequiresWriterPermission" /></td>
    <td><code>boolean</code></td>
    <td>Whether the options to copy, print, or download this file, should be disabled for readers and commenters.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadRestrictions" /></td>
    <td><code>object</code></td>
    <td>Download restrictions applied on the file. (id: DownloadRestrictionsMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="explicitlyTrashed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorRgb" /></td>
    <td><code>string</code></td>
    <td>The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.</td>
</tr>
<tr>
    <td><CopyableCode code="fullFileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.</td>
</tr>
<tr>
    <td><CopyableCode code="hasAugmentedPermissions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="hasThumbnail" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.</td>
</tr>
<tr>
    <td><CopyableCode code="headRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="iconLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A static, unauthenticated link to the file's icon.</td>
</tr>
<tr>
    <td><CopyableCode code="imageMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about image media, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="isAppAuthorized" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file was created or opened by the requesting app.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`. (default: drive#file)</td>
</tr>
<tr>
    <td><CopyableCode code="labelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. An overview of the labels on the file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="linkShareMetadata" /></td>
    <td><code>object</code></td>
    <td>Contains details about the link URLs that clients are using to refer to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been modified by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was modified by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="ownedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user owns the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of permission IDs for users with access to this file.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A key needed to access the item via a shared link.</td>
</tr>
<tr>
    <td><CopyableCode code="sha1Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="sha256Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been shared. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWithMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was shared with the user, if applicable (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="sharingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutDetails" /></td>
    <td><code>object</code></td>
    <td>Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.create` requests.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.</td>
</tr>
<tr>
    <td><CopyableCode code="starred" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has starred the file.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Output only. Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies, consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailVersion" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The thumbnail version for use in thumbnail cache invalidation.</td>
</tr>
<tr>
    <td><CopyableCode code="trashed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.</td>
</tr>
<tr>
    <td><CopyableCode code="trashedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="trashingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="videoMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about video media. This may not be available immediately upon upload.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been viewed by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was viewed by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="viewersCanCopyContent" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated: Use `copyRequiresWriterPermission` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="webContentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="webViewLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for opening the file in a relevant Google editor or viewer in a browser.</td>
</tr>
<tr>
    <td><CopyableCode code="writersCanShare" /></td>
    <td><code>boolean</code></td>
    <td>Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-corpora"><code>corpora</code></a>, <a href="#parameter-corpus"><code>corpus</code></a>, <a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-spaces"><code>spaces</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-ignoreDefaultVisibility"><code>ignoreDefaultVisibility</code></a>, <a href="#parameter-keepRevisionForever"><code>keepRevisionForever</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Creates a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-addParents"><code>addParents</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-keepRevisionForever"><code>keepRevisionForever</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-removeParents"><code>removeParents</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a></td>
    <td>Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-ignoreDefaultVisibility"><code>ignoreDefaultVisibility</code></a>, <a href="#parameter-keepRevisionForever"><code>keepRevisionForever</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Creates a copy of a file and applies any requested updates with patch semantics.</td>
</tr>
<tr>
    <td><a href="#empty_trash"><CopyableCode code="empty_trash" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-driveId"><code>driveId</code></a></td>
    <td>Permanently deletes all of the user's trashed files.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-mimeType"><code>mimeType</code></a></td>
    <td></td>
    <td>Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.</td>
</tr>
<tr>
    <td><a href="#generate_ids"><CopyableCode code="generate_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-count"><code>count</code></a>, <a href="#parameter-space"><code>space</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Generates a set of file IDs which can be provided in create or copy requests.</td>
</tr>
<tr>
    <td><a href="#modify_labels"><CopyableCode code="modify_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Subscribes to changes to a file.</td>
</tr>
<tr>
    <td><a href="#download"><CopyableCode code="download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-mimeType"><code>mimeType</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td>Downloads content of a file. Operations are valid for 24 hours from the time of creation.</td>
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
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-mimeType">
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-acknowledgeAbuse">
    <td><CopyableCode code="acknowledgeAbuse" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-addParents">
    <td><CopyableCode code="addParents" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-corpora">
    <td><CopyableCode code="corpora" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-corpus">
    <td><CopyableCode code="corpus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-driveId">
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceSingleParent">
    <td><CopyableCode code="enforceSingleParent" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreDefaultVisibility">
    <td><CopyableCode code="ignoreDefaultVisibility" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeItemsFromAllDrives">
    <td><CopyableCode code="includeItemsFromAllDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeLabels">
    <td><CopyableCode code="includeLabels" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includePermissionsForView">
    <td><CopyableCode code="includePermissionsForView" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeTeamDriveItems">
    <td><CopyableCode code="includeTeamDriveItems" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-keepRevisionForever">
    <td><CopyableCode code="keepRevisionForever" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-mimeType">
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ocrLanguage">
    <td><CopyableCode code="ocrLanguage" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-removeParents">
    <td><CopyableCode code="removeParents" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-space">
    <td><CopyableCode code="space" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-spaces">
    <td><CopyableCode code="spaces" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-supportsAllDrives">
    <td><CopyableCode code="supportsAllDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-supportsTeamDrives">
    <td><CopyableCode code="supportsTeamDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-teamDriveId">
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-useContentAsIndexableText">
    <td><CopyableCode code="useContentAsIndexableText" /></td>
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

 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).

```sql
SELECT
id,
name,
appProperties,
capabilities,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare
FROM googleworkspace.drivev3.files
WHERE fileId = '{{ fileId }}' -- required
AND acknowledgeAbuse = '{{ acknowledgeAbuse }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND includeLabels = '{{ includeLabels }}';
```
</TabItem>
<TabItem value="list">

 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

```sql
SELECT
id,
name,
appProperties,
capabilities,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare
FROM googleworkspace.drivev3.files
WHERE corpora = '{{ corpora }}'
AND corpus = '{{ corpus }}'
AND driveId = '{{ driveId }}'
AND includeItemsFromAllDrives = '{{ includeItemsFromAllDrives }}'
AND includeTeamDriveItems = '{{ includeTeamDriveItems }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND q = '{{ q }}'
AND spaces = '{{ spaces }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND teamDriveId = '{{ teamDriveId }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND includeLabels = '{{ includeLabels }}';
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

 Creates a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

```sql
INSERT INTO googleworkspace.drivev3.files (
data__kind,
data__driveId,
data__fileExtension,
data__copyRequiresWriterPermission,
data__md5Checksum,
data__contentHints,
data__writersCanShare,
data__viewedByMe,
data__mimeType,
data__parents,
data__thumbnailLink,
data__iconLink,
data__shared,
data__lastModifyingUser,
data__owners,
data__headRevisionId,
data__sharingUser,
data__webViewLink,
data__webContentLink,
data__size,
data__viewersCanCopyContent,
data__permissions,
data__hasThumbnail,
data__spaces,
data__folderColorRgb,
data__id,
data__name,
data__description,
data__starred,
data__trashed,
data__explicitlyTrashed,
data__createdTime,
data__modifiedTime,
data__modifiedByMeTime,
data__viewedByMeTime,
data__sharedWithMeTime,
data__quotaBytesUsed,
data__version,
data__originalFilename,
data__ownedByMe,
data__fullFileExtension,
data__properties,
data__appProperties,
data__isAppAuthorized,
data__teamDriveId,
data__capabilities,
data__hasAugmentedPermissions,
data__trashingUser,
data__thumbnailVersion,
data__trashedTime,
data__modifiedByMe,
data__permissionIds,
data__imageMediaMetadata,
data__videoMediaMetadata,
data__shortcutDetails,
data__contentRestrictions,
data__resourceKey,
data__linkShareMetadata,
data__labelInfo,
data__sha1Checksum,
data__sha256Checksum,
data__inheritedPermissionsDisabled,
data__downloadRestrictions,
enforceSingleParent,
ignoreDefaultVisibility,
keepRevisionForever,
ocrLanguage,
supportsAllDrives,
supportsTeamDrives,
useContentAsIndexableText,
includePermissionsForView,
includeLabels
)
SELECT 
'{{ kind }}',
'{{ driveId }}',
'{{ fileExtension }}',
{{ copyRequiresWriterPermission }},
'{{ md5Checksum }}',
'{{ contentHints }}',
{{ writersCanShare }},
{{ viewedByMe }},
'{{ mimeType }}',
'{{ parents }}',
'{{ thumbnailLink }}',
'{{ iconLink }}',
{{ shared }},
'{{ lastModifyingUser }}',
'{{ owners }}',
'{{ headRevisionId }}',
'{{ sharingUser }}',
'{{ webViewLink }}',
'{{ webContentLink }}',
'{{ size }}',
{{ viewersCanCopyContent }},
'{{ permissions }}',
{{ hasThumbnail }},
'{{ spaces }}',
'{{ folderColorRgb }}',
'{{ id }}',
'{{ name }}',
'{{ description }}',
{{ starred }},
{{ trashed }},
{{ explicitlyTrashed }},
'{{ createdTime }}',
'{{ modifiedTime }}',
'{{ modifiedByMeTime }}',
'{{ viewedByMeTime }}',
'{{ sharedWithMeTime }}',
'{{ quotaBytesUsed }}',
'{{ version }}',
'{{ originalFilename }}',
{{ ownedByMe }},
'{{ fullFileExtension }}',
'{{ properties }}',
'{{ appProperties }}',
{{ isAppAuthorized }},
'{{ teamDriveId }}',
'{{ capabilities }}',
{{ hasAugmentedPermissions }},
'{{ trashingUser }}',
'{{ thumbnailVersion }}',
'{{ trashedTime }}',
{{ modifiedByMe }},
'{{ permissionIds }}',
'{{ imageMediaMetadata }}',
'{{ videoMediaMetadata }}',
'{{ shortcutDetails }}',
'{{ contentRestrictions }}',
'{{ resourceKey }}',
'{{ linkShareMetadata }}',
'{{ labelInfo }}',
'{{ sha1Checksum }}',
'{{ sha256Checksum }}',
{{ inheritedPermissionsDisabled }},
'{{ downloadRestrictions }}',
'{{ enforceSingleParent }}',
'{{ ignoreDefaultVisibility }}',
'{{ keepRevisionForever }}',
'{{ ocrLanguage }}',
'{{ supportsAllDrives }}',
'{{ supportsTeamDrives }}',
'{{ useContentAsIndexableText }}',
'{{ includePermissionsForView }}',
'{{ includeLabels }}'
RETURNING
id,
name,
appProperties,
capabilities,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: files
  props:
    - name: kind
      value: string
      description: >
        Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.
        
      default: drive#file
    - name: driveId
      value: string
      description: >
        Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.
        
    - name: fileExtension
      value: string
      description: >
        Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.
        
    - name: copyRequiresWriterPermission
      value: boolean
      description: >
        Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
        
    - name: md5Checksum
      value: string
      description: >
        Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
        
    - name: contentHints
      value: object
      description: >
        Additional information about the content of the file. These fields are never populated in responses.
        
    - name: writersCanShare
      value: boolean
      description: >
        Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.
        
    - name: viewedByMe
      value: boolean
      description: >
        Output only. Whether the file has been viewed by this user.
        
    - name: mimeType
      value: string
      description: >
        The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.
        
    - name: parents
      value: array
      description: >
        The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.
        
    - name: thumbnailLink
      value: string
      description: >
        Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies, consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.
        
    - name: iconLink
      value: string
      description: >
        Output only. A static, unauthenticated link to the file's icon.
        
    - name: shared
      value: boolean
      description: >
        Output only. Whether the file has been shared. Not populated for items in shared drives.
        
    - name: lastModifyingUser
      value: object
      description: >
        Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user.
        
    - name: owners
      value: array
      description: >
        Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
        
    - name: headRevisionId
      value: string
      description: >
        Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.
        
    - name: sharingUser
      value: object
      description: >
        Information about a Drive user.
        
    - name: webViewLink
      value: string
      description: >
        Output only. A link for opening the file in a relevant Google editor or viewer in a browser.
        
    - name: webContentLink
      value: string
      description: >
        Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
        
    - name: size
      value: string
      description: >
        Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.
        
    - name: viewersCanCopyContent
      value: boolean
      description: >
        Deprecated: Use `copyRequiresWriterPermission` instead.
        
    - name: permissions
      value: array
      description: >
        Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
        
    - name: hasThumbnail
      value: boolean
      description: >
        Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
        
    - name: spaces
      value: array
      description: >
        Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
        
    - name: folderColorRgb
      value: string
      description: >
        The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.
        
    - name: id
      value: string
      description: >
        The ID of the file.
        
    - name: name
      value: string
      description: >
        The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.
        
    - name: description
      value: string
      description: >
        A short description of the file.
        
    - name: starred
      value: boolean
      description: >
        Whether the user has starred the file.
        
    - name: trashed
      value: boolean
      description: >
        Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.
        
    - name: explicitlyTrashed
      value: boolean
      description: >
        Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
        
    - name: createdTime
      value: string
      description: >
        The time at which the file was created (RFC 3339 date-time).
        
    - name: modifiedTime
      value: string
      description: >
        he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.
        
    - name: modifiedByMeTime
      value: string
      description: >
        The last time the file was modified by the user (RFC 3339 date-time).
        
    - name: viewedByMeTime
      value: string
      description: >
        The last time the file was viewed by the user (RFC 3339 date-time).
        
    - name: sharedWithMeTime
      value: string
      description: >
        The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
        
    - name: quotaBytesUsed
      value: string
      description: >
        Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.
        
    - name: version
      value: string
      description: >
        Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
        
    - name: originalFilename
      value: string
      description: >
        The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.
        
    - name: ownedByMe
      value: boolean
      description: >
        Output only. Whether the user owns the file. Not populated for items in shared drives.
        
    - name: fullFileExtension
      value: string
      description: >
        Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.
        
    - name: properties
      value: object
      description: >
        A collection of arbitrary key-value pairs which are visible to all apps.
Entries with null values are cleared in update and copy requests.
        
    - name: appProperties
      value: object
      description: >
        A collection of arbitrary key-value pairs which are private to the requesting app.
Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
        
    - name: isAppAuthorized
      value: boolean
      description: >
        Output only. Whether the file was created or opened by the requesting app.
        
    - name: teamDriveId
      value: string
      description: >
        Deprecated: Output only. Use `driveId` instead.
        
    - name: capabilities
      value: object
      description: >
        Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
        
    - name: hasAugmentedPermissions
      value: boolean
      description: >
        Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.
        
    - name: trashingUser
      value: object
      description: >
        Information about a Drive user.
        
    - name: thumbnailVersion
      value: string
      description: >
        Output only. The thumbnail version for use in thumbnail cache invalidation.
        
    - name: trashedTime
      value: string
      description: >
        The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
        
    - name: modifiedByMe
      value: boolean
      description: >
        Output only. Whether the file has been modified by this user.
        
    - name: permissionIds
      value: array
      description: >
        Output only. List of permission IDs for users with access to this file.
        
    - name: imageMediaMetadata
      value: object
      description: >
        Output only. Additional metadata about image media, if available.
        
    - name: videoMediaMetadata
      value: object
      description: >
        Output only. Additional metadata about video media. This may not be available immediately upon upload.
        
    - name: shortcutDetails
      value: object
      description: >
        Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.create` requests.
        
    - name: contentRestrictions
      value: array
      description: >
        Restrictions for accessing the content of the file. Only populated if such a restriction exists.
        
    - name: resourceKey
      value: string
      description: >
        Output only. A key needed to access the item via a shared link.
        
    - name: linkShareMetadata
      value: object
      description: >
        Contains details about the link URLs that clients are using to refer to this item.
        
    - name: labelInfo
      value: object
      description: >
        Output only. An overview of the labels on the file.
        
    - name: sha1Checksum
      value: string
      description: >
        Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
        
    - name: sha256Checksum
      value: string
      description: >
        Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
        
    - name: inheritedPermissionsDisabled
      value: boolean
      description: >
        Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.
        
    - name: downloadRestrictions
      value: object
      description: >
        Download restrictions applied on the file.
        
    - name: enforceSingleParent
      value: boolean
    - name: ignoreDefaultVisibility
      value: boolean
    - name: keepRevisionForever
      value: boolean
    - name: ocrLanguage
      value: string
    - name: supportsAllDrives
      value: boolean
    - name: supportsTeamDrives
      value: boolean
    - name: useContentAsIndexableText
      value: boolean
    - name: includePermissionsForView
      value: string
    - name: includeLabels
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

 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).

```sql
UPDATE googleworkspace.drivev3.files
SET 
data__kind = '{{ kind }}',
data__driveId = '{{ driveId }}',
data__fileExtension = '{{ fileExtension }}',
data__copyRequiresWriterPermission = {{ copyRequiresWriterPermission }},
data__md5Checksum = '{{ md5Checksum }}',
data__contentHints = '{{ contentHints }}',
data__writersCanShare = {{ writersCanShare }},
data__viewedByMe = {{ viewedByMe }},
data__mimeType = '{{ mimeType }}',
data__parents = '{{ parents }}',
data__thumbnailLink = '{{ thumbnailLink }}',
data__iconLink = '{{ iconLink }}',
data__shared = {{ shared }},
data__lastModifyingUser = '{{ lastModifyingUser }}',
data__owners = '{{ owners }}',
data__headRevisionId = '{{ headRevisionId }}',
data__sharingUser = '{{ sharingUser }}',
data__webViewLink = '{{ webViewLink }}',
data__webContentLink = '{{ webContentLink }}',
data__size = '{{ size }}',
data__viewersCanCopyContent = {{ viewersCanCopyContent }},
data__permissions = '{{ permissions }}',
data__hasThumbnail = {{ hasThumbnail }},
data__spaces = '{{ spaces }}',
data__folderColorRgb = '{{ folderColorRgb }}',
data__id = '{{ id }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__starred = {{ starred }},
data__trashed = {{ trashed }},
data__explicitlyTrashed = {{ explicitlyTrashed }},
data__createdTime = '{{ createdTime }}',
data__modifiedTime = '{{ modifiedTime }}',
data__modifiedByMeTime = '{{ modifiedByMeTime }}',
data__viewedByMeTime = '{{ viewedByMeTime }}',
data__sharedWithMeTime = '{{ sharedWithMeTime }}',
data__quotaBytesUsed = '{{ quotaBytesUsed }}',
data__version = '{{ version }}',
data__originalFilename = '{{ originalFilename }}',
data__ownedByMe = {{ ownedByMe }},
data__fullFileExtension = '{{ fullFileExtension }}',
data__properties = '{{ properties }}',
data__appProperties = '{{ appProperties }}',
data__isAppAuthorized = {{ isAppAuthorized }},
data__teamDriveId = '{{ teamDriveId }}',
data__capabilities = '{{ capabilities }}',
data__hasAugmentedPermissions = {{ hasAugmentedPermissions }},
data__trashingUser = '{{ trashingUser }}',
data__thumbnailVersion = '{{ thumbnailVersion }}',
data__trashedTime = '{{ trashedTime }}',
data__modifiedByMe = {{ modifiedByMe }},
data__permissionIds = '{{ permissionIds }}',
data__imageMediaMetadata = '{{ imageMediaMetadata }}',
data__videoMediaMetadata = '{{ videoMediaMetadata }}',
data__shortcutDetails = '{{ shortcutDetails }}',
data__contentRestrictions = '{{ contentRestrictions }}',
data__resourceKey = '{{ resourceKey }}',
data__linkShareMetadata = '{{ linkShareMetadata }}',
data__labelInfo = '{{ labelInfo }}',
data__sha1Checksum = '{{ sha1Checksum }}',
data__sha256Checksum = '{{ sha256Checksum }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }},
data__downloadRestrictions = '{{ downloadRestrictions }}'
WHERE 
fileId = '{{ fileId }}' --required
AND addParents = '{{ addParents}}'
AND enforceSingleParent = {{ enforceSingleParent}}
AND keepRevisionForever = {{ keepRevisionForever}}
AND ocrLanguage = '{{ ocrLanguage}}'
AND removeParents = '{{ removeParents}}'
AND supportsAllDrives = {{ supportsAllDrives}}
AND supportsTeamDrives = {{ supportsTeamDrives}}
AND useContentAsIndexableText = {{ useContentAsIndexableText}}
AND includePermissionsForView = '{{ includePermissionsForView}}'
AND includeLabels = '{{ includeLabels}}'
RETURNING
id,
name,
appProperties,
capabilities,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare;
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

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

```sql
DELETE FROM googleworkspace.drivev3.files
WHERE fileId = '{{ fileId }}' --required
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND enforceSingleParent = '{{ enforceSingleParent }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy"
    values={[
        { label: 'copy', value: 'copy' },
        { label: 'empty_trash', value: 'empty_trash' },
        { label: 'export', value: 'export' },
        { label: 'generate_ids', value: 'generate_ids' },
        { label: 'modify_labels', value: 'modify_labels' },
        { label: 'watch', value: 'watch' },
        { label: 'download', value: 'download' }
    ]}
>
<TabItem value="copy">

Creates a copy of a file and applies any requested updates with patch semantics.

```sql
EXEC googleworkspace.drivev3.files.copy 
@fileId='{{ fileId }}' --required, 
@enforceSingleParent={{ enforceSingleParent }}, 
@ignoreDefaultVisibility={{ ignoreDefaultVisibility }}, 
@keepRevisionForever={{ keepRevisionForever }}, 
@ocrLanguage='{{ ocrLanguage }}', 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}' 
@@json=
'{
"kind": "{{ kind }}", 
"driveId": "{{ driveId }}", 
"fileExtension": "{{ fileExtension }}", 
"copyRequiresWriterPermission": {{ copyRequiresWriterPermission }}, 
"md5Checksum": "{{ md5Checksum }}", 
"contentHints": "{{ contentHints }}", 
"writersCanShare": {{ writersCanShare }}, 
"viewedByMe": {{ viewedByMe }}, 
"mimeType": "{{ mimeType }}", 
"parents": "{{ parents }}", 
"thumbnailLink": "{{ thumbnailLink }}", 
"iconLink": "{{ iconLink }}", 
"shared": {{ shared }}, 
"lastModifyingUser": "{{ lastModifyingUser }}", 
"owners": "{{ owners }}", 
"headRevisionId": "{{ headRevisionId }}", 
"sharingUser": "{{ sharingUser }}", 
"webViewLink": "{{ webViewLink }}", 
"webContentLink": "{{ webContentLink }}", 
"size": "{{ size }}", 
"viewersCanCopyContent": {{ viewersCanCopyContent }}, 
"permissions": "{{ permissions }}", 
"hasThumbnail": {{ hasThumbnail }}, 
"spaces": "{{ spaces }}", 
"folderColorRgb": "{{ folderColorRgb }}", 
"id": "{{ id }}", 
"name": "{{ name }}", 
"description": "{{ description }}", 
"starred": {{ starred }}, 
"trashed": {{ trashed }}, 
"explicitlyTrashed": {{ explicitlyTrashed }}, 
"createdTime": "{{ createdTime }}", 
"modifiedTime": "{{ modifiedTime }}", 
"modifiedByMeTime": "{{ modifiedByMeTime }}", 
"viewedByMeTime": "{{ viewedByMeTime }}", 
"sharedWithMeTime": "{{ sharedWithMeTime }}", 
"quotaBytesUsed": "{{ quotaBytesUsed }}", 
"version": "{{ version }}", 
"originalFilename": "{{ originalFilename }}", 
"ownedByMe": {{ ownedByMe }}, 
"fullFileExtension": "{{ fullFileExtension }}", 
"properties": "{{ properties }}", 
"appProperties": "{{ appProperties }}", 
"isAppAuthorized": {{ isAppAuthorized }}, 
"teamDriveId": "{{ teamDriveId }}", 
"capabilities": "{{ capabilities }}", 
"hasAugmentedPermissions": {{ hasAugmentedPermissions }}, 
"trashingUser": "{{ trashingUser }}", 
"thumbnailVersion": "{{ thumbnailVersion }}", 
"trashedTime": "{{ trashedTime }}", 
"modifiedByMe": {{ modifiedByMe }}, 
"permissionIds": "{{ permissionIds }}", 
"imageMediaMetadata": "{{ imageMediaMetadata }}", 
"videoMediaMetadata": "{{ videoMediaMetadata }}", 
"shortcutDetails": "{{ shortcutDetails }}", 
"contentRestrictions": "{{ contentRestrictions }}", 
"resourceKey": "{{ resourceKey }}", 
"linkShareMetadata": "{{ linkShareMetadata }}", 
"labelInfo": "{{ labelInfo }}", 
"sha1Checksum": "{{ sha1Checksum }}", 
"sha256Checksum": "{{ sha256Checksum }}", 
"inheritedPermissionsDisabled": {{ inheritedPermissionsDisabled }}, 
"downloadRestrictions": "{{ downloadRestrictions }}"
}';
```
</TabItem>
<TabItem value="empty_trash">

Permanently deletes all of the user's trashed files.

```sql
EXEC googleworkspace.drivev3.files.empty_trash 
@enforceSingleParent={{ enforceSingleParent }}, 
@driveId='{{ driveId }}';
```
</TabItem>
<TabItem value="export">

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

```sql
EXEC googleworkspace.drivev3.files.export 
@fileId='{{ fileId }}' --required, 
@mimeType='{{ mimeType }}' --required;
```
</TabItem>
<TabItem value="generate_ids">

Generates a set of file IDs which can be provided in create or copy requests.

```sql
EXEC googleworkspace.drivev3.files.generate_ids 
@count='{{ count }}', 
@space='{{ space }}', 
@type='{{ type }}';
```
</TabItem>
<TabItem value="modify_labels">

Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.

```sql
EXEC googleworkspace.drivev3.files.modify_labels 
@fileId='{{ fileId }}' --required 
@@json=
'{
"labelModifications": "{{ labelModifications }}", 
"kind": "{{ kind }}"
}';
```
</TabItem>
<TabItem value="watch">

Subscribes to changes to a file.

```sql
EXEC googleworkspace.drivev3.files.watch 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@acknowledgeAbuse={{ acknowledgeAbuse }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}' 
@@json=
'{
"payload": {{ payload }}, 
"id": "{{ id }}", 
"resourceId": "{{ resourceId }}", 
"resourceUri": "{{ resourceUri }}", 
"token": "{{ token }}", 
"expiration": "{{ expiration }}", 
"type": "{{ type }}", 
"address": "{{ address }}", 
"params": "{{ params }}", 
"kind": "{{ kind }}"
}';
```
</TabItem>
<TabItem value="download">

Downloads content of a file. Operations are valid for 24 hours from the time of creation.

```sql
EXEC googleworkspace.drivev3.files.download 
@fileId='{{ fileId }}' --required, 
@mimeType='{{ mimeType }}', 
@revisionId='{{ revisionId }}';
```
</TabItem>
</Tabs>
