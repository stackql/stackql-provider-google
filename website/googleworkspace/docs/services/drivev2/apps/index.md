--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.apps" /></td></tr>
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
    <td>The ID of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="authorized" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app is authorized to access data on the user's Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="createInFolderTemplate" /></td>
    <td><code>string</code></td>
    <td>The template url to create a new file with this app in a given folder. The template will contain &#123;folderId&#125; to be replaced by the folder to create the new file in.</td>
</tr>
<tr>
    <td><CopyableCode code="createUrl" /></td>
    <td><code>string</code></td>
    <td>The url to create a new file with this app.</td>
</tr>
<tr>
    <td><CopyableCode code="hasDriveWideScope" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.</td>
</tr>
<tr>
    <td><CopyableCode code="icons" /></td>
    <td><code>array</code></td>
    <td>The various icons for the app.</td>
</tr>
<tr>
    <td><CopyableCode code="installed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app is installed.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#app`. (default: drive#app)</td>
</tr>
<tr>
    <td><CopyableCode code="longDescription" /></td>
    <td><code>string</code></td>
    <td>A long description of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="objectType" /></td>
    <td><code>string</code></td>
    <td>The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.</td>
</tr>
<tr>
    <td><CopyableCode code="openUrlTemplate" /></td>
    <td><code>string</code></td>
    <td>The template url for opening files with this app. The template will contain `&#123;ids&#125;` and/or `&#123;exportIds&#125;` to be replaced by the actual file ids. See Open Files for the full documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryFileExtensions" /></td>
    <td><code>array</code></td>
    <td>The list of primary file extensions.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryMimeTypes" /></td>
    <td><code>array</code></td>
    <td>The list of primary mime types.</td>
</tr>
<tr>
    <td><CopyableCode code="productId" /></td>
    <td><code>string</code></td>
    <td>The ID of the product listing for this app.</td>
</tr>
<tr>
    <td><CopyableCode code="productUrl" /></td>
    <td><code>string</code></td>
    <td>A link to the product listing for this app.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryFileExtensions" /></td>
    <td><code>array</code></td>
    <td>The list of secondary file extensions.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryMimeTypes" /></td>
    <td><code>array</code></td>
    <td>The list of secondary mime types.</td>
</tr>
<tr>
    <td><CopyableCode code="shortDescription" /></td>
    <td><code>string</code></td>
    <td>A short description of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsCreate" /></td>
    <td><code>boolean</code></td>
    <td>Whether this app supports creating new objects.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsImport" /></td>
    <td><code>boolean</code></td>
    <td>Whether this app supports importing from Docs Editors.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsMultiOpen" /></td>
    <td><code>boolean</code></td>
    <td>Whether this app supports opening more than one file.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsOfflineCreate" /></td>
    <td><code>boolean</code></td>
    <td>Whether this app supports creating new files when offline.</td>
</tr>
<tr>
    <td><CopyableCode code="useByDefault" /></td>
    <td><code>boolean</code></td>
    <td>Whether the app is selected as the default handler for the types it supports.</td>
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
    <td><CopyableCode code="defaultAppIds" /></td>
    <td><code>array</code></td>
    <td>List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The ETag of the list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>The list of apps.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#appList`. (default: drive#appList)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this list.</td>
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
    <td><a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>Gets a specific app.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-appFilterExtensions"><code>appFilterExtensions</code></a>, <a href="#parameter-appFilterMimeTypes"><code>appFilterMimeTypes</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td>Lists a user's installed apps.</td>
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
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appFilterExtensions">
    <td><CopyableCode code="appFilterExtensions" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appFilterMimeTypes">
    <td><CopyableCode code="appFilterMimeTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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

Gets a specific app.

```sql
SELECT
id,
name,
authorized,
createInFolderTemplate,
createUrl,
hasDriveWideScope,
icons,
installed,
kind,
longDescription,
objectType,
openUrlTemplate,
primaryFileExtensions,
primaryMimeTypes,
productId,
productUrl,
secondaryFileExtensions,
secondaryMimeTypes,
shortDescription,
supportsCreate,
supportsImport,
supportsMultiOpen,
supportsOfflineCreate,
useByDefault
FROM googleworkspace.drivev2.apps
WHERE appId = '{{ appId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists a user's installed apps.

```sql
SELECT
defaultAppIds,
etag,
items,
kind,
selfLink
FROM googleworkspace.drivev2.apps
WHERE appFilterExtensions = '{{ appFilterExtensions }}'
AND appFilterMimeTypes = '{{ appFilterMimeTypes }}'
AND languageCode = '{{ languageCode }}';
```
</TabItem>
</Tabs>
