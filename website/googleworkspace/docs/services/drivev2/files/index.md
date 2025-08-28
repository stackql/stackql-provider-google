--- 
title: files
hide_title: false
hide_table_of_contents: false
keywords:
  - files
  - drivev2
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
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.files" /></td></tr>
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
    <td><CopyableCode code="alternateLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for opening the file in a relevant Google editor or viewer.</td>
</tr>
<tr>
    <td><CopyableCode code="appDataContents" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file is in the Application Data folder.</td>
</tr>
<tr>
    <td><CopyableCode code="canComment" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canComment` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="canReadRevisions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canReadRevisions` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.</td>
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
    <td><CopyableCode code="copyable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canCopy` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Create time for this file (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="defaultOpenWithLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="editable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canEdit` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="embedLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for embedding the file.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="explicitlyTrashed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSize" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorRgb" /></td>
    <td><code>string</code></td>
    <td>Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.</td>
</tr>
<tr>
    <td><CopyableCode code="fullFileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
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
    <td>Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="iconLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the file's icon.</td>
</tr>
<tr>
    <td><CopyableCode code="imageMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.</td>
</tr>
<tr>
    <td><CopyableCode code="indexableText" /></td>
    <td><code>object</code></td>
    <td>Indexable text attributes for the file (can only be written)</td>
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
    <td>Output only. The type of file. This is always `drive#file`. (default: drive#file)</td>
</tr>
<tr>
    <td><CopyableCode code="labelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. An overview of the labels on the file.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>A group of labels for the file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Output only. The last user to modify this file. This field is only populated when the last modification was performed by a signed-in user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUserName" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last user to modify this file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastViewedByMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this file was viewed by the user (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="linkShareMetadata" /></td>
    <td><code>object</code></td>
    <td>Contains details about the link URLs that clients are using to refer to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="markedViewedByMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.</td>
</tr>
<tr>
    <td><CopyableCode code="openWithLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="ownedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file is owned by the current user. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerNames" /></td>
    <td><code>array</code></td>
    <td>Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of an insert request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of permission IDs for users with access to this file.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of permissions for users with access to this file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>The list of properties.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of quota bytes used by this file.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A key needed to access the item via a shared link.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this file.</td>
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
    <td><CopyableCode code="shareable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canShare` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been shared. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWithMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which this file was shared with the user (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="sharingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutDetails" /></td>
    <td><code>object</code></td>
    <td>Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.insert` requests.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of spaces which contain the file. Supported values are `drive`, `appDataFolder` and `photos`.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail" /></td>
    <td><code>object</code></td>
    <td>A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailVersion" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The thumbnail version for use in thumbnail cache invalidation.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.</td>
</tr>
<tr>
    <td><CopyableCode code="trashedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="trashingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="userPermission" /></td>
    <td><code>object</code></td>
    <td>Output only. The permissions for the authenticated user on this file. (id: Permission)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.</td>
</tr>
<tr>
    <td><CopyableCode code="videoMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata about video media. This will only be present for video types.</td>
</tr>
<tr>
    <td><CopyableCode code="webContentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="webViewLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.</td>
</tr>
<tr>
    <td><CopyableCode code="writersCanShare" /></td>
    <td><code>boolean</code></td>
    <td>Whether writers can share the document with other users. Not populated for items in shared drives.</td>
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
    <td><CopyableCode code="alternateLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for opening the file in a relevant Google editor or viewer.</td>
</tr>
<tr>
    <td><CopyableCode code="appDataContents" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file is in the Application Data folder.</td>
</tr>
<tr>
    <td><CopyableCode code="canComment" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canComment` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="canReadRevisions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canReadRevisions` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.</td>
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
    <td><CopyableCode code="copyable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canCopy` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Create time for this file (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="defaultOpenWithLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="editable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canEdit` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="embedLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for embedding the file.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. ETag of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="explicitlyTrashed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSize" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorRgb" /></td>
    <td><code>string</code></td>
    <td>Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.</td>
</tr>
<tr>
    <td><CopyableCode code="fullFileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
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
    <td>Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="iconLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the file's icon.</td>
</tr>
<tr>
    <td><CopyableCode code="imageMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.</td>
</tr>
<tr>
    <td><CopyableCode code="indexableText" /></td>
    <td><code>object</code></td>
    <td>Indexable text attributes for the file (can only be written)</td>
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
    <td>Output only. The type of file. This is always `drive#file`. (default: drive#file)</td>
</tr>
<tr>
    <td><CopyableCode code="labelInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. An overview of the labels on the file.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>A group of labels for the file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Output only. The last user to modify this file. This field is only populated when the last modification was performed by a signed-in user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUserName" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last user to modify this file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastViewedByMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this file was viewed by the user (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="linkShareMetadata" /></td>
    <td><code>object</code></td>
    <td>Contains details about the link URLs that clients are using to refer to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="markedViewedByMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.</td>
</tr>
<tr>
    <td><CopyableCode code="openWithLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="ownedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file is owned by the current user. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerNames" /></td>
    <td><code>array</code></td>
    <td>Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of an insert request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of permission IDs for users with access to this file.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of permissions for users with access to this file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>The list of properties.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of quota bytes used by this file.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A key needed to access the item via a shared link.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this file.</td>
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
    <td><CopyableCode code="shareable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Deprecated: Use `capabilities/canShare` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been shared. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWithMeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which this file was shared with the user (formatted RFC 3339 timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="sharingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutDetails" /></td>
    <td><code>object</code></td>
    <td>Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.insert` requests.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of spaces which contain the file. Supported values are `drive`, `appDataFolder` and `photos`.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail" /></td>
    <td><code>object</code></td>
    <td>A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailVersion" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The thumbnail version for use in thumbnail cache invalidation.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.</td>
</tr>
<tr>
    <td><CopyableCode code="trashedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="trashingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="userPermission" /></td>
    <td><code>object</code></td>
    <td>Output only. The permissions for the authenticated user on this file. (id: Permission)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.</td>
</tr>
<tr>
    <td><CopyableCode code="videoMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata about video media. This will only be present for video types.</td>
</tr>
<tr>
    <td><CopyableCode code="webContentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="webViewLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.</td>
</tr>
<tr>
    <td><CopyableCode code="writersCanShare" /></td>
    <td><code>boolean</code></td>
    <td>Whether writers can share the document with other users. Not populated for items in shared drives.</td>
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
    <td><a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-updateViewedDate"><code>updateViewedDate</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-corpora"><code>corpora</code></a>, <a href="#parameter-corpus"><code>corpus</code></a>, <a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-spaces"><code>spaces</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-convert"><code>convert</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-ocr"><code>ocr</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-pinned"><code>pinned</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-timedTextLanguage"><code>timedTextLanguage</code></a>, <a href="#parameter-timedTextTrackName"><code>timedTextTrackName</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a>, <a href="#parameter-visibility"><code>visibility</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td> Inserts a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-addParents"><code>addParents</code></a>, <a href="#parameter-convert"><code>convert</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-modifiedDateBehavior"><code>modifiedDateBehavior</code></a>, <a href="#parameter-newRevision"><code>newRevision</code></a>, <a href="#parameter-ocr"><code>ocr</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-pinned"><code>pinned</code></a>, <a href="#parameter-removeParents"><code>removeParents</code></a>, <a href="#parameter-setModifiedDate"><code>setModifiedDate</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-timedTextLanguage"><code>timedTextLanguage</code></a>, <a href="#parameter-timedTextTrackName"><code>timedTextTrackName</code></a>, <a href="#parameter-updateViewedDate"><code>updateViewedDate</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-addParents"><code>addParents</code></a>, <a href="#parameter-convert"><code>convert</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-modifiedDateBehavior"><code>modifiedDateBehavior</code></a>, <a href="#parameter-newRevision"><code>newRevision</code></a>, <a href="#parameter-ocr"><code>ocr</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-pinned"><code>pinned</code></a>, <a href="#parameter-removeParents"><code>removeParents</code></a>, <a href="#parameter-setModifiedDate"><code>setModifiedDate</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-timedTextLanguage"><code>timedTextLanguage</code></a>, <a href="#parameter-timedTextTrackName"><code>timedTextTrackName</code></a>, <a href="#parameter-updateViewedDate"><code>updateViewedDate</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
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
    <td><a href="#parameter-convert"><code>convert</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-ocr"><code>ocr</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-pinned"><code>pinned</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-timedTextLanguage"><code>timedTextLanguage</code></a>, <a href="#parameter-timedTextTrackName"><code>timedTextTrackName</code></a>, <a href="#parameter-visibility"><code>visibility</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Creates a copy of the specified file.</td>
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
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-space"><code>space</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Generates a set of file IDs which can be provided in insert or copy requests.</td>
</tr>
<tr>
    <td><a href="#modify_labels"><CopyableCode code="modify_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.</td>
</tr>
<tr>
    <td><a href="#touch"><CopyableCode code="touch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Set the file's updated time to the current server time.</td>
</tr>
<tr>
    <td><a href="#trash"><CopyableCode code="trash" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.</td>
</tr>
<tr>
    <td><a href="#untrash"><CopyableCode code="untrash" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a>, <a href="#parameter-updateViewedDate"><code>updateViewedDate</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Subscribes to changes to a file.</td>
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
<tr id="parameter-convert">
    <td><CopyableCode code="convert" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-modifiedDateBehavior">
    <td><CopyableCode code="modifiedDateBehavior" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-newRevision">
    <td><CopyableCode code="newRevision" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ocr">
    <td><CopyableCode code="ocr" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pinned">
    <td><CopyableCode code="pinned" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-projection">
    <td><CopyableCode code="projection" /></td>
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
<tr id="parameter-setModifiedDate">
    <td><CopyableCode code="setModifiedDate" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-timedTextLanguage">
    <td><CopyableCode code="timedTextLanguage" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timedTextTrackName">
    <td><CopyableCode code="timedTextTrackName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateViewedDate">
    <td><CopyableCode code="updateViewedDate" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-useContentAsIndexableText">
    <td><CopyableCode code="useContentAsIndexableText" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-visibility">
    <td><CopyableCode code="visibility" /></td>
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

 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).

```sql
SELECT
id,
alternateLink,
appDataContents,
canComment,
canReadRevisions,
capabilities,
contentRestrictions,
copyRequiresWriterPermission,
copyable,
createdDate,
defaultOpenWithLink,
description,
downloadUrl,
driveId,
editable,
embedLink,
etag,
explicitlyTrashed,
exportLinks,
fileExtension,
fileSize,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
indexableText,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
labels,
lastModifyingUser,
lastModifyingUserName,
lastViewedByMeDate,
linkShareMetadata,
markedViewedByMeDate,
md5Checksum,
mimeType,
modifiedByMeDate,
modifiedDate,
openWithLinks,
originalFilename,
ownedByMe,
ownerNames,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
selfLink,
sha1Checksum,
sha256Checksum,
shareable,
shared,
sharedWithMeDate,
sharingUser,
shortcutDetails,
spaces,
teamDriveId,
thumbnail,
thumbnailLink,
thumbnailVersion,
title,
trashedDate,
trashingUser,
userPermission,
version,
videoMediaMetadata,
webContentLink,
webViewLink,
writersCanShare
FROM googleworkspace.drivev2.files
WHERE fileId = '{{ fileId }}' -- required
AND acknowledgeAbuse = '{{ acknowledgeAbuse }}'
AND projection = '{{ projection }}'
AND revisionId = '{{ revisionId }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND updateViewedDate = '{{ updateViewedDate }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND includeLabels = '{{ includeLabels }}';
```
</TabItem>
<TabItem value="list">

 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

```sql
SELECT
id,
alternateLink,
appDataContents,
canComment,
canReadRevisions,
capabilities,
contentRestrictions,
copyRequiresWriterPermission,
copyable,
createdDate,
defaultOpenWithLink,
description,
downloadUrl,
driveId,
editable,
embedLink,
etag,
explicitlyTrashed,
exportLinks,
fileExtension,
fileSize,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
indexableText,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
labels,
lastModifyingUser,
lastModifyingUserName,
lastViewedByMeDate,
linkShareMetadata,
markedViewedByMeDate,
md5Checksum,
mimeType,
modifiedByMeDate,
modifiedDate,
openWithLinks,
originalFilename,
ownedByMe,
ownerNames,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
selfLink,
sha1Checksum,
sha256Checksum,
shareable,
shared,
sharedWithMeDate,
sharingUser,
shortcutDetails,
spaces,
teamDriveId,
thumbnail,
thumbnailLink,
thumbnailVersion,
title,
trashedDate,
trashingUser,
userPermission,
version,
videoMediaMetadata,
webContentLink,
webViewLink,
writersCanShare
FROM googleworkspace.drivev2.files
WHERE corpora = '{{ corpora }}'
AND corpus = '{{ corpus }}'
AND driveId = '{{ driveId }}'
AND includeItemsFromAllDrives = '{{ includeItemsFromAllDrives }}'
AND includeTeamDriveItems = '{{ includeTeamDriveItems }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND projection = '{{ projection }}'
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
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

 Inserts a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

```sql
INSERT INTO googleworkspace.drivev2.files (
data__kind,
data__userPermission,
data__fileExtension,
data__md5Checksum,
data__selfLink,
data__ownerNames,
data__lastModifyingUserName,
data__editable,
data__writersCanShare,
data__downloadUrl,
data__mimeType,
data__driveId,
data__parents,
data__thumbnailLink,
data__appDataContents,
data__webViewLink,
data__iconLink,
data__shared,
data__lastModifyingUser,
data__owners,
data__openWithLinks,
data__defaultOpenWithLink,
data__headRevisionId,
data__properties,
data__copyable,
data__etag,
data__sharingUser,
data__alternateLink,
data__embedLink,
data__webContentLink,
data__fileSize,
data__copyRequiresWriterPermission,
data__permissions,
data__hasThumbnail,
data__spaces,
data__folderColorRgb,
data__id,
data__title,
data__description,
data__labels,
data__explicitlyTrashed,
data__createdDate,
data__modifiedDate,
data__modifiedByMeDate,
data__lastViewedByMeDate,
data__markedViewedByMeDate,
data__sharedWithMeDate,
data__quotaBytesUsed,
data__version,
data__indexableText,
data__originalFilename,
data__ownedByMe,
data__canComment,
data__shareable,
data__fullFileExtension,
data__isAppAuthorized,
data__teamDriveId,
data__capabilities,
data__hasAugmentedPermissions,
data__trashingUser,
data__canReadRevisions,
data__thumbnailVersion,
data__trashedDate,
data__permissionIds,
data__thumbnail,
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
convert,
enforceSingleParent,
ocr,
ocrLanguage,
pinned,
supportsAllDrives,
supportsTeamDrives,
timedTextLanguage,
timedTextTrackName,
useContentAsIndexableText,
visibility,
includePermissionsForView,
includeLabels
)
SELECT 
'{{ kind }}',
'{{ userPermission }}',
'{{ fileExtension }}',
'{{ md5Checksum }}',
'{{ selfLink }}',
'{{ ownerNames }}',
'{{ lastModifyingUserName }}',
{{ editable }},
{{ writersCanShare }},
'{{ downloadUrl }}',
'{{ mimeType }}',
'{{ driveId }}',
'{{ parents }}',
'{{ thumbnailLink }}',
{{ appDataContents }},
'{{ webViewLink }}',
'{{ iconLink }}',
{{ shared }},
'{{ lastModifyingUser }}',
'{{ owners }}',
'{{ openWithLinks }}',
'{{ defaultOpenWithLink }}',
'{{ headRevisionId }}',
'{{ properties }}',
{{ copyable }},
'{{ etag }}',
'{{ sharingUser }}',
'{{ alternateLink }}',
'{{ embedLink }}',
'{{ webContentLink }}',
'{{ fileSize }}',
{{ copyRequiresWriterPermission }},
'{{ permissions }}',
{{ hasThumbnail }},
'{{ spaces }}',
'{{ folderColorRgb }}',
'{{ id }}',
'{{ title }}',
'{{ description }}',
'{{ labels }}',
{{ explicitlyTrashed }},
'{{ createdDate }}',
'{{ modifiedDate }}',
'{{ modifiedByMeDate }}',
'{{ lastViewedByMeDate }}',
'{{ markedViewedByMeDate }}',
'{{ sharedWithMeDate }}',
'{{ quotaBytesUsed }}',
'{{ version }}',
'{{ indexableText }}',
'{{ originalFilename }}',
{{ ownedByMe }},
{{ canComment }},
{{ shareable }},
'{{ fullFileExtension }}',
{{ isAppAuthorized }},
'{{ teamDriveId }}',
'{{ capabilities }}',
{{ hasAugmentedPermissions }},
'{{ trashingUser }}',
{{ canReadRevisions }},
'{{ thumbnailVersion }}',
'{{ trashedDate }}',
'{{ permissionIds }}',
'{{ thumbnail }}',
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
'{{ convert }}',
'{{ enforceSingleParent }}',
'{{ ocr }}',
'{{ ocrLanguage }}',
'{{ pinned }}',
'{{ supportsAllDrives }}',
'{{ supportsTeamDrives }}',
'{{ timedTextLanguage }}',
'{{ timedTextTrackName }}',
'{{ useContentAsIndexableText }}',
'{{ visibility }}',
'{{ includePermissionsForView }}',
'{{ includeLabels }}'
RETURNING
id,
alternateLink,
appDataContents,
canComment,
canReadRevisions,
capabilities,
contentRestrictions,
copyRequiresWriterPermission,
copyable,
createdDate,
defaultOpenWithLink,
description,
downloadUrl,
driveId,
editable,
embedLink,
etag,
explicitlyTrashed,
exportLinks,
fileExtension,
fileSize,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
indexableText,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
labels,
lastModifyingUser,
lastModifyingUserName,
lastViewedByMeDate,
linkShareMetadata,
markedViewedByMeDate,
md5Checksum,
mimeType,
modifiedByMeDate,
modifiedDate,
openWithLinks,
originalFilename,
ownedByMe,
ownerNames,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
selfLink,
sha1Checksum,
sha256Checksum,
shareable,
shared,
sharedWithMeDate,
sharingUser,
shortcutDetails,
spaces,
teamDriveId,
thumbnail,
thumbnailLink,
thumbnailVersion,
title,
trashedDate,
trashingUser,
userPermission,
version,
videoMediaMetadata,
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
        Output only. The type of file. This is always `drive#file`.
        
      default: drive#file
    - name: userPermission
      value: object
      description: >
        Output only. The permissions for the authenticated user on this file.
        
    - name: fileExtension
      value: string
      description: >
        Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
        
    - name: md5Checksum
      value: string
      description: >
        Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
        
    - name: selfLink
      value: string
      description: >
        Output only. A link back to this file.
        
    - name: ownerNames
      value: array
      description: >
        Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives.
        
    - name: lastModifyingUserName
      value: string
      description: >
        Output only. Name of the last user to modify this file.
        
    - name: editable
      value: boolean
      description: >
        Output only. Deprecated: Use `capabilities/canEdit` instead.
        
    - name: writersCanShare
      value: boolean
      description: >
        Whether writers can share the document with other users. Not populated for items in shared drives.
        
    - name: downloadUrl
      value: string
      description: >
        Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
        
    - name: mimeType
      value: string
      description: >
        The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.
        
    - name: driveId
      value: string
      description: >
        Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.
        
    - name: parents
      value: array
      description: >
        The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of an insert request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.
        
    - name: thumbnailLink
      value: string
      description: >
        Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.
        
    - name: appDataContents
      value: boolean
      description: >
        Output only. Whether this file is in the Application Data folder.
        
    - name: webViewLink
      value: string
      description: >
        Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
        
    - name: iconLink
      value: string
      description: >
        Output only. A link to the file's icon.
        
    - name: shared
      value: boolean
      description: >
        Output only. Whether the file has been shared. Not populated for items in shared drives.
        
    - name: lastModifyingUser
      value: object
      description: >
        Output only. The last user to modify this file. This field is only populated when the last modification was performed by a signed-in user.
        
    - name: owners
      value: array
      description: >
        Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
        
    - name: openWithLinks
      value: object
      description: >
        Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
        
    - name: defaultOpenWithLink
      value: string
      description: >
        Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.
        
    - name: headRevisionId
      value: string
      description: >
        Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
        
    - name: properties
      value: array
      description: >
        The list of properties.
        
    - name: copyable
      value: boolean
      description: >
        Output only. Deprecated: Use `capabilities/canCopy` instead.
        
    - name: etag
      value: string
      description: >
        Output only. ETag of the file.
        
    - name: sharingUser
      value: object
      description: >
        Information about a Drive user.
        
    - name: alternateLink
      value: string
      description: >
        Output only. A link for opening the file in a relevant Google editor or viewer.
        
    - name: embedLink
      value: string
      description: >
        Output only. A link for embedding the file.
        
    - name: webContentLink
      value: string
      description: >
        Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
        
    - name: fileSize
      value: string
      description: >
        Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.
        
    - name: copyRequiresWriterPermission
      value: boolean
      description: >
        Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
        
    - name: permissions
      value: array
      description: >
        Output only. The list of permissions for users with access to this file. Not populated for items in shared drives.
        
    - name: hasThumbnail
      value: boolean
      description: >
        Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
        
    - name: spaces
      value: array
      description: >
        Output only. The list of spaces which contain the file. Supported values are `drive`, `appDataFolder` and `photos`.
        
    - name: folderColorRgb
      value: string
      description: >
        Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.
        
    - name: id
      value: string
      description: >
        The ID of the file.
        
    - name: title
      value: string
      description: >
        The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.
        
    - name: description
      value: string
      description: >
        A short description of the file.
        
    - name: labels
      value: object
      description: >
        A group of labels for the file.
        
    - name: explicitlyTrashed
      value: boolean
      description: >
        Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed.
        
    - name: createdDate
      value: string
      description: >
        Create time for this file (formatted RFC 3339 timestamp).
        
    - name: modifiedDate
      value: string
      description: >
        Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
        
    - name: modifiedByMeDate
      value: string
      description: >
        Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
        
    - name: lastViewedByMeDate
      value: string
      description: >
        Last time this file was viewed by the user (formatted RFC 3339 timestamp).
        
    - name: markedViewedByMeDate
      value: string
      description: >
        Deprecated.
        
    - name: sharedWithMeDate
      value: string
      description: >
        Time at which this file was shared with the user (formatted RFC 3339 timestamp).
        
    - name: quotaBytesUsed
      value: string
      description: >
        Output only. The number of quota bytes used by this file.
        
    - name: version
      value: string
      description: >
        Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
        
    - name: indexableText
      value: object
      description: >
        Indexable text attributes for the file (can only be written)
        
    - name: originalFilename
      value: string
      description: >
        The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive.
        
    - name: ownedByMe
      value: boolean
      description: >
        Output only. Whether the file is owned by the current user. Not populated for items in shared drives.
        
    - name: canComment
      value: boolean
      description: >
        Output only. Deprecated: Use `capabilities/canComment` instead.
        
    - name: shareable
      value: boolean
      description: >
        Output only. Deprecated: Use `capabilities/canShare` instead.
        
    - name: fullFileExtension
      value: string
      description: >
        Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
        
    - name: isAppAuthorized
      value: boolean
      description: >
        Output only. Whether the file was created or opened by the requesting app.
        
    - name: teamDriveId
      value: string
      description: >
        Output only. Deprecated: Use `driveId` instead.
        
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
        
    - name: canReadRevisions
      value: boolean
      description: >
        Output only. Deprecated: Use `capabilities/canReadRevisions` instead.
        
    - name: thumbnailVersion
      value: string
      description: >
        Output only. The thumbnail version for use in thumbnail cache invalidation.
        
    - name: trashedDate
      value: string
      description: >
        The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
        
    - name: permissionIds
      value: array
      description: >
        Output only. List of permission IDs for users with access to this file.
        
    - name: thumbnail
      value: object
      description: >
        A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
        
    - name: imageMediaMetadata
      value: object
      description: >
        Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
        
    - name: videoMediaMetadata
      value: object
      description: >
        Output only. Metadata about video media. This will only be present for video types.
        
    - name: shortcutDetails
      value: object
      description: >
        Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.insert` requests.
        
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
        
    - name: convert
      value: boolean
    - name: enforceSingleParent
      value: boolean
    - name: ocr
      value: boolean
    - name: ocrLanguage
      value: string
    - name: pinned
      value: boolean
    - name: supportsAllDrives
      value: boolean
    - name: supportsTeamDrives
      value: boolean
    - name: timedTextLanguage
      value: string
    - name: timedTextTrackName
      value: string
    - name: useContentAsIndexableText
      value: boolean
    - name: visibility
      value: string
    - name: includePermissionsForView
      value: string
    - name: includeLabels
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

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

```sql
UPDATE googleworkspace.drivev2.files
SET 
data__kind = '{{ kind }}',
data__userPermission = '{{ userPermission }}',
data__fileExtension = '{{ fileExtension }}',
data__md5Checksum = '{{ md5Checksum }}',
data__selfLink = '{{ selfLink }}',
data__ownerNames = '{{ ownerNames }}',
data__lastModifyingUserName = '{{ lastModifyingUserName }}',
data__editable = {{ editable }},
data__writersCanShare = {{ writersCanShare }},
data__downloadUrl = '{{ downloadUrl }}',
data__mimeType = '{{ mimeType }}',
data__driveId = '{{ driveId }}',
data__parents = '{{ parents }}',
data__thumbnailLink = '{{ thumbnailLink }}',
data__appDataContents = {{ appDataContents }},
data__webViewLink = '{{ webViewLink }}',
data__iconLink = '{{ iconLink }}',
data__shared = {{ shared }},
data__lastModifyingUser = '{{ lastModifyingUser }}',
data__owners = '{{ owners }}',
data__openWithLinks = '{{ openWithLinks }}',
data__defaultOpenWithLink = '{{ defaultOpenWithLink }}',
data__headRevisionId = '{{ headRevisionId }}',
data__properties = '{{ properties }}',
data__copyable = {{ copyable }},
data__etag = '{{ etag }}',
data__sharingUser = '{{ sharingUser }}',
data__alternateLink = '{{ alternateLink }}',
data__embedLink = '{{ embedLink }}',
data__webContentLink = '{{ webContentLink }}',
data__fileSize = '{{ fileSize }}',
data__copyRequiresWriterPermission = {{ copyRequiresWriterPermission }},
data__permissions = '{{ permissions }}',
data__hasThumbnail = {{ hasThumbnail }},
data__spaces = '{{ spaces }}',
data__folderColorRgb = '{{ folderColorRgb }}',
data__id = '{{ id }}',
data__title = '{{ title }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__explicitlyTrashed = {{ explicitlyTrashed }},
data__createdDate = '{{ createdDate }}',
data__modifiedDate = '{{ modifiedDate }}',
data__modifiedByMeDate = '{{ modifiedByMeDate }}',
data__lastViewedByMeDate = '{{ lastViewedByMeDate }}',
data__markedViewedByMeDate = '{{ markedViewedByMeDate }}',
data__sharedWithMeDate = '{{ sharedWithMeDate }}',
data__quotaBytesUsed = '{{ quotaBytesUsed }}',
data__version = '{{ version }}',
data__indexableText = '{{ indexableText }}',
data__originalFilename = '{{ originalFilename }}',
data__ownedByMe = {{ ownedByMe }},
data__canComment = {{ canComment }},
data__shareable = {{ shareable }},
data__fullFileExtension = '{{ fullFileExtension }}',
data__isAppAuthorized = {{ isAppAuthorized }},
data__teamDriveId = '{{ teamDriveId }}',
data__capabilities = '{{ capabilities }}',
data__hasAugmentedPermissions = {{ hasAugmentedPermissions }},
data__trashingUser = '{{ trashingUser }}',
data__canReadRevisions = {{ canReadRevisions }},
data__thumbnailVersion = '{{ thumbnailVersion }}',
data__trashedDate = '{{ trashedDate }}',
data__permissionIds = '{{ permissionIds }}',
data__thumbnail = '{{ thumbnail }}',
data__imageMediaMetadata = '{{ imageMediaMetadata }}',
data__videoMediaMetadata = '{{ videoMediaMetadata }}',
data__shortcutDetails = '{{ shortcutDetails }}',
data__contentRestrictions = '{{ contentRestrictions }}',
data__resourceKey = '{{ resourceKey }}',
data__linkShareMetadata = '{{ linkShareMetadata }}',
data__labelInfo = '{{ labelInfo }}',
data__sha1Checksum = '{{ sha1Checksum }}',
data__sha256Checksum = '{{ sha256Checksum }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }}
WHERE 
fileId = '{{ fileId }}' --required
AND addParents = '{{ addParents}}'
AND convert = {{ convert}}
AND enforceSingleParent = {{ enforceSingleParent}}
AND modifiedDateBehavior = '{{ modifiedDateBehavior}}'
AND newRevision = {{ newRevision}}
AND ocr = {{ ocr}}
AND ocrLanguage = '{{ ocrLanguage}}'
AND pinned = {{ pinned}}
AND removeParents = '{{ removeParents}}'
AND setModifiedDate = {{ setModifiedDate}}
AND supportsAllDrives = {{ supportsAllDrives}}
AND supportsTeamDrives = {{ supportsTeamDrives}}
AND timedTextLanguage = '{{ timedTextLanguage}}'
AND timedTextTrackName = '{{ timedTextTrackName}}'
AND updateViewedDate = {{ updateViewedDate}}
AND useContentAsIndexableText = {{ useContentAsIndexableText}}
AND includePermissionsForView = '{{ includePermissionsForView}}'
AND includeLabels = '{{ includeLabels}}'
RETURNING
id,
alternateLink,
appDataContents,
canComment,
canReadRevisions,
capabilities,
contentRestrictions,
copyRequiresWriterPermission,
copyable,
createdDate,
defaultOpenWithLink,
description,
downloadUrl,
driveId,
editable,
embedLink,
etag,
explicitlyTrashed,
exportLinks,
fileExtension,
fileSize,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
indexableText,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
labels,
lastModifyingUser,
lastModifyingUserName,
lastViewedByMeDate,
linkShareMetadata,
markedViewedByMeDate,
md5Checksum,
mimeType,
modifiedByMeDate,
modifiedDate,
openWithLinks,
originalFilename,
ownedByMe,
ownerNames,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
selfLink,
sha1Checksum,
sha256Checksum,
shareable,
shared,
sharedWithMeDate,
sharingUser,
shortcutDetails,
spaces,
teamDriveId,
thumbnail,
thumbnailLink,
thumbnailVersion,
title,
trashedDate,
trashingUser,
userPermission,
version,
videoMediaMetadata,
webContentLink,
webViewLink,
writersCanShare;
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

 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).

```sql
REPLACE googleworkspace.drivev2.files
SET 
data__kind = '{{ kind }}',
data__userPermission = '{{ userPermission }}',
data__fileExtension = '{{ fileExtension }}',
data__md5Checksum = '{{ md5Checksum }}',
data__selfLink = '{{ selfLink }}',
data__ownerNames = '{{ ownerNames }}',
data__lastModifyingUserName = '{{ lastModifyingUserName }}',
data__editable = {{ editable }},
data__writersCanShare = {{ writersCanShare }},
data__downloadUrl = '{{ downloadUrl }}',
data__mimeType = '{{ mimeType }}',
data__driveId = '{{ driveId }}',
data__parents = '{{ parents }}',
data__thumbnailLink = '{{ thumbnailLink }}',
data__appDataContents = {{ appDataContents }},
data__webViewLink = '{{ webViewLink }}',
data__iconLink = '{{ iconLink }}',
data__shared = {{ shared }},
data__lastModifyingUser = '{{ lastModifyingUser }}',
data__owners = '{{ owners }}',
data__openWithLinks = '{{ openWithLinks }}',
data__defaultOpenWithLink = '{{ defaultOpenWithLink }}',
data__headRevisionId = '{{ headRevisionId }}',
data__properties = '{{ properties }}',
data__copyable = {{ copyable }},
data__etag = '{{ etag }}',
data__sharingUser = '{{ sharingUser }}',
data__alternateLink = '{{ alternateLink }}',
data__embedLink = '{{ embedLink }}',
data__webContentLink = '{{ webContentLink }}',
data__fileSize = '{{ fileSize }}',
data__copyRequiresWriterPermission = {{ copyRequiresWriterPermission }},
data__permissions = '{{ permissions }}',
data__hasThumbnail = {{ hasThumbnail }},
data__spaces = '{{ spaces }}',
data__folderColorRgb = '{{ folderColorRgb }}',
data__id = '{{ id }}',
data__title = '{{ title }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__explicitlyTrashed = {{ explicitlyTrashed }},
data__createdDate = '{{ createdDate }}',
data__modifiedDate = '{{ modifiedDate }}',
data__modifiedByMeDate = '{{ modifiedByMeDate }}',
data__lastViewedByMeDate = '{{ lastViewedByMeDate }}',
data__markedViewedByMeDate = '{{ markedViewedByMeDate }}',
data__sharedWithMeDate = '{{ sharedWithMeDate }}',
data__quotaBytesUsed = '{{ quotaBytesUsed }}',
data__version = '{{ version }}',
data__indexableText = '{{ indexableText }}',
data__originalFilename = '{{ originalFilename }}',
data__ownedByMe = {{ ownedByMe }},
data__canComment = {{ canComment }},
data__shareable = {{ shareable }},
data__fullFileExtension = '{{ fullFileExtension }}',
data__isAppAuthorized = {{ isAppAuthorized }},
data__teamDriveId = '{{ teamDriveId }}',
data__capabilities = '{{ capabilities }}',
data__hasAugmentedPermissions = {{ hasAugmentedPermissions }},
data__trashingUser = '{{ trashingUser }}',
data__canReadRevisions = {{ canReadRevisions }},
data__thumbnailVersion = '{{ thumbnailVersion }}',
data__trashedDate = '{{ trashedDate }}',
data__permissionIds = '{{ permissionIds }}',
data__thumbnail = '{{ thumbnail }}',
data__imageMediaMetadata = '{{ imageMediaMetadata }}',
data__videoMediaMetadata = '{{ videoMediaMetadata }}',
data__shortcutDetails = '{{ shortcutDetails }}',
data__contentRestrictions = '{{ contentRestrictions }}',
data__resourceKey = '{{ resourceKey }}',
data__linkShareMetadata = '{{ linkShareMetadata }}',
data__labelInfo = '{{ labelInfo }}',
data__sha1Checksum = '{{ sha1Checksum }}',
data__sha256Checksum = '{{ sha256Checksum }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }}
WHERE 
fileId = '{{ fileId }}' --required
AND addParents = '{{ addParents}}'
AND convert = {{ convert}}
AND enforceSingleParent = {{ enforceSingleParent}}
AND modifiedDateBehavior = '{{ modifiedDateBehavior}}'
AND newRevision = {{ newRevision}}
AND ocr = {{ ocr}}
AND ocrLanguage = '{{ ocrLanguage}}'
AND pinned = {{ pinned}}
AND removeParents = '{{ removeParents}}'
AND setModifiedDate = {{ setModifiedDate}}
AND supportsAllDrives = {{ supportsAllDrives}}
AND supportsTeamDrives = {{ supportsTeamDrives}}
AND timedTextLanguage = '{{ timedTextLanguage}}'
AND timedTextTrackName = '{{ timedTextTrackName}}'
AND updateViewedDate = {{ updateViewedDate}}
AND useContentAsIndexableText = {{ useContentAsIndexableText}}
AND includePermissionsForView = '{{ includePermissionsForView}}'
AND includeLabels = '{{ includeLabels}}'
RETURNING
id,
alternateLink,
appDataContents,
canComment,
canReadRevisions,
capabilities,
contentRestrictions,
copyRequiresWriterPermission,
copyable,
createdDate,
defaultOpenWithLink,
description,
downloadUrl,
driveId,
editable,
embedLink,
etag,
explicitlyTrashed,
exportLinks,
fileExtension,
fileSize,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
indexableText,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
labels,
lastModifyingUser,
lastModifyingUserName,
lastViewedByMeDate,
linkShareMetadata,
markedViewedByMeDate,
md5Checksum,
mimeType,
modifiedByMeDate,
modifiedDate,
openWithLinks,
originalFilename,
ownedByMe,
ownerNames,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
selfLink,
sha1Checksum,
sha256Checksum,
shareable,
shared,
sharedWithMeDate,
sharingUser,
shortcutDetails,
spaces,
teamDriveId,
thumbnail,
thumbnailLink,
thumbnailVersion,
title,
trashedDate,
trashingUser,
userPermission,
version,
videoMediaMetadata,
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
DELETE FROM googleworkspace.drivev2.files
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
        { label: 'touch', value: 'touch' },
        { label: 'trash', value: 'trash' },
        { label: 'untrash', value: 'untrash' },
        { label: 'watch', value: 'watch' }
    ]}
>
<TabItem value="copy">

Creates a copy of the specified file.

```sql
EXEC googleworkspace.drivev2.files.copy 
@fileId='{{ fileId }}' --required, 
@convert={{ convert }}, 
@enforceSingleParent={{ enforceSingleParent }}, 
@ocr={{ ocr }}, 
@ocrLanguage='{{ ocrLanguage }}', 
@pinned={{ pinned }}, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@timedTextLanguage='{{ timedTextLanguage }}', 
@timedTextTrackName='{{ timedTextTrackName }}', 
@visibility='{{ visibility }}', 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}' 
@@json=
'{
"kind": "{{ kind }}", 
"userPermission": "{{ userPermission }}", 
"fileExtension": "{{ fileExtension }}", 
"md5Checksum": "{{ md5Checksum }}", 
"selfLink": "{{ selfLink }}", 
"ownerNames": "{{ ownerNames }}", 
"lastModifyingUserName": "{{ lastModifyingUserName }}", 
"editable": {{ editable }}, 
"writersCanShare": {{ writersCanShare }}, 
"downloadUrl": "{{ downloadUrl }}", 
"mimeType": "{{ mimeType }}", 
"driveId": "{{ driveId }}", 
"parents": "{{ parents }}", 
"thumbnailLink": "{{ thumbnailLink }}", 
"appDataContents": {{ appDataContents }}, 
"webViewLink": "{{ webViewLink }}", 
"iconLink": "{{ iconLink }}", 
"shared": {{ shared }}, 
"lastModifyingUser": "{{ lastModifyingUser }}", 
"owners": "{{ owners }}", 
"openWithLinks": "{{ openWithLinks }}", 
"defaultOpenWithLink": "{{ defaultOpenWithLink }}", 
"headRevisionId": "{{ headRevisionId }}", 
"properties": "{{ properties }}", 
"copyable": {{ copyable }}, 
"etag": "{{ etag }}", 
"sharingUser": "{{ sharingUser }}", 
"alternateLink": "{{ alternateLink }}", 
"embedLink": "{{ embedLink }}", 
"webContentLink": "{{ webContentLink }}", 
"fileSize": "{{ fileSize }}", 
"copyRequiresWriterPermission": {{ copyRequiresWriterPermission }}, 
"permissions": "{{ permissions }}", 
"hasThumbnail": {{ hasThumbnail }}, 
"spaces": "{{ spaces }}", 
"folderColorRgb": "{{ folderColorRgb }}", 
"id": "{{ id }}", 
"title": "{{ title }}", 
"description": "{{ description }}", 
"labels": "{{ labels }}", 
"explicitlyTrashed": {{ explicitlyTrashed }}, 
"createdDate": "{{ createdDate }}", 
"modifiedDate": "{{ modifiedDate }}", 
"modifiedByMeDate": "{{ modifiedByMeDate }}", 
"lastViewedByMeDate": "{{ lastViewedByMeDate }}", 
"markedViewedByMeDate": "{{ markedViewedByMeDate }}", 
"sharedWithMeDate": "{{ sharedWithMeDate }}", 
"quotaBytesUsed": "{{ quotaBytesUsed }}", 
"version": "{{ version }}", 
"indexableText": "{{ indexableText }}", 
"originalFilename": "{{ originalFilename }}", 
"ownedByMe": {{ ownedByMe }}, 
"canComment": {{ canComment }}, 
"shareable": {{ shareable }}, 
"fullFileExtension": "{{ fullFileExtension }}", 
"isAppAuthorized": {{ isAppAuthorized }}, 
"teamDriveId": "{{ teamDriveId }}", 
"capabilities": "{{ capabilities }}", 
"hasAugmentedPermissions": {{ hasAugmentedPermissions }}, 
"trashingUser": "{{ trashingUser }}", 
"canReadRevisions": {{ canReadRevisions }}, 
"thumbnailVersion": "{{ thumbnailVersion }}", 
"trashedDate": "{{ trashedDate }}", 
"permissionIds": "{{ permissionIds }}", 
"thumbnail": "{{ thumbnail }}", 
"imageMediaMetadata": "{{ imageMediaMetadata }}", 
"videoMediaMetadata": "{{ videoMediaMetadata }}", 
"shortcutDetails": "{{ shortcutDetails }}", 
"contentRestrictions": "{{ contentRestrictions }}", 
"resourceKey": "{{ resourceKey }}", 
"linkShareMetadata": "{{ linkShareMetadata }}", 
"labelInfo": "{{ labelInfo }}", 
"sha1Checksum": "{{ sha1Checksum }}", 
"sha256Checksum": "{{ sha256Checksum }}", 
"inheritedPermissionsDisabled": {{ inheritedPermissionsDisabled }}
}';
```
</TabItem>
<TabItem value="empty_trash">

Permanently deletes all of the user's trashed files.

```sql
EXEC googleworkspace.drivev2.files.empty_trash 
@enforceSingleParent={{ enforceSingleParent }}, 
@driveId='{{ driveId }}';
```
</TabItem>
<TabItem value="export">

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

```sql
EXEC googleworkspace.drivev2.files.export 
@fileId='{{ fileId }}' --required, 
@mimeType='{{ mimeType }}' --required;
```
</TabItem>
<TabItem value="generate_ids">

Generates a set of file IDs which can be provided in insert or copy requests.

```sql
EXEC googleworkspace.drivev2.files.generate_ids 
@maxResults='{{ maxResults }}', 
@space='{{ space }}', 
@type='{{ type }}';
```
</TabItem>
<TabItem value="modify_labels">

Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.

```sql
EXEC googleworkspace.drivev2.files.modify_labels 
@fileId='{{ fileId }}' --required 
@@json=
'{
"labelModifications": "{{ labelModifications }}", 
"kind": "{{ kind }}"
}';
```
</TabItem>
<TabItem value="touch">

Set the file's updated time to the current server time.

```sql
EXEC googleworkspace.drivev2.files.touch 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}';
```
</TabItem>
<TabItem value="trash">

Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.

```sql
EXEC googleworkspace.drivev2.files.trash 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}';
```
</TabItem>
<TabItem value="untrash">

Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.

```sql
EXEC googleworkspace.drivev2.files.untrash 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@includeLabels='{{ includeLabels }}';
```
</TabItem>
<TabItem value="watch">

Subscribes to changes to a file.

```sql
EXEC googleworkspace.drivev2.files.watch 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@acknowledgeAbuse={{ acknowledgeAbuse }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@revisionId='{{ revisionId }}', 
@updateViewedDate={{ updateViewedDate }}, 
@projection='{{ projection }}', 
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
</Tabs>
