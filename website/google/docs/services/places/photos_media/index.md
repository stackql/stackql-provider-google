--- 
title: photos_media
hide_title: false
hide_table_of_contents: false
keywords:
  - photos_media
  - places
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

Creates, updates, deletes, gets or lists a <code>photos_media</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>photos_media</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.places.photos_media" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media"
    values={[
        { label: 'get_media', value: 'get_media' }
    ]}
>
<TabItem value="get_media">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The resource name of a photo media in the format: `places/&#123;place_id&#125;/photos/&#123;photo_reference&#125;/media`.</td>
</tr>
<tr>
    <td><CopyableCode code="photoUri" /></td>
    <td><code>string</code></td>
    <td>A short-lived uri that can be used to render the photo.</td>
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
    <td><a href="#get_media"><CopyableCode code="get_media" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-placesId"><code>placesId</code></a>, <a href="#parameter-photosId"><code>photosId</code></a></td>
    <td><a href="#parameter-maxWidthPx"><code>maxWidthPx</code></a>, <a href="#parameter-maxHeightPx"><code>maxHeightPx</code></a>, <a href="#parameter-skipHttpRedirect"><code>skipHttpRedirect</code></a></td>
    <td>Get a photo media with a photo reference string.</td>
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
<tr id="parameter-photosId">
    <td><CopyableCode code="photosId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-placesId">
    <td><CopyableCode code="placesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxHeightPx">
    <td><CopyableCode code="maxHeightPx" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-maxWidthPx">
    <td><CopyableCode code="maxWidthPx" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-skipHttpRedirect">
    <td><CopyableCode code="skipHttpRedirect" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_media"
    values={[
        { label: 'get_media', value: 'get_media' }
    ]}
>
<TabItem value="get_media">

Get a photo media with a photo reference string.

```sql
SELECT
name,
photoUri
FROM google.places.photos_media
WHERE placesId = '{{ placesId }}' -- required
AND photosId = '{{ photosId }}' -- required
AND maxWidthPx = '{{ maxWidthPx }}'
AND maxHeightPx = '{{ maxHeightPx }}'
AND skipHttpRedirect = '{{ skipHttpRedirect }}';
```
</TabItem>
</Tabs>
