--- 
title: photos
hide_title: false
hide_table_of_contents: false
keywords:
  - photos
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>photos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>photos</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.photos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td>The ID the API uses to uniquely identify the user.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="height" /></td>
    <td><code>integer (int32)</code></td>
    <td>Height of the photo in pixels.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. For Photo resources, this is `admin#directory#user#photo`. (default: admin#directory#user#photo)</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.</td>
</tr>
<tr>
    <td><CopyableCode code="photoData" /></td>
    <td><code>string (byte)</code></td>
    <td>The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryEmail" /></td>
    <td><code>string</code></td>
    <td>The user's primary email address.</td>
</tr>
<tr>
    <td><CopyableCode code="width" /></td>
    <td><code>integer (int32)</code></td>
    <td>Width of the photo in pixels.</td>
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
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Retrieves the user's photo.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Adds a photo for the user. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Adds a photo for the user.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Removes the user's photo.</td>
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
<tr id="parameter-userKey">
    <td><CopyableCode code="userKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieves the user's photo.

```sql
SELECT
id,
etag,
height,
kind,
mimeType,
photoData,
primaryEmail,
width
FROM googleadmin.directory.photos
WHERE userKey = '{{ userKey }}' -- required;
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

Adds a photo for the user. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

```sql
UPDATE googleadmin.directory.photos
SET 
data__id = '{{ id }}',
data__primaryEmail = '{{ primaryEmail }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__photoData = '{{ photoData }}',
data__mimeType = '{{ mimeType }}',
data__width = {{ width }},
data__height = {{ height }}
WHERE 
userKey = '{{ userKey }}' --required
RETURNING
id,
etag,
height,
kind,
mimeType,
photoData,
primaryEmail,
width;
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

Adds a photo for the user.

```sql
REPLACE googleadmin.directory.photos
SET 
data__id = '{{ id }}',
data__primaryEmail = '{{ primaryEmail }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__photoData = '{{ photoData }}',
data__mimeType = '{{ mimeType }}',
data__width = {{ width }},
data__height = {{ height }}
WHERE 
userKey = '{{ userKey }}' --required
RETURNING
id,
etag,
height,
kind,
mimeType,
photoData,
primaryEmail,
width;
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

Removes the user's photo.

```sql
DELETE FROM googleadmin.directory.photos
WHERE userKey = '{{ userKey }}' --required;
```
</TabItem>
</Tabs>
