--- 
title: asps
hide_title: false
hide_table_of_contents: false
keywords:
  - asps
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

Creates, updates, deletes, gets or lists an <code>asps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>asps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.asps" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application that the user, represented by their `userId`, entered when the ASP was created.</td>
</tr>
<tr>
    <td><CopyableCode code="codeId" /></td>
    <td><code>integer (int32)</code></td>
    <td>The unique ID of the ASP.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (int64)</code></td>
    <td>The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the ASP.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#asp`. (default: admin#directory#asp)</td>
</tr>
<tr>
    <td><CopyableCode code="lastTimeUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.</td>
</tr>
<tr>
    <td><CopyableCode code="userKey" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the user who issued the ASP.</td>
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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of ASP resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#aspList`. (default: admin#directory#aspList)</td>
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
    <td><a href="#parameter-userKey"><code>userKey</code></a>, <a href="#parameter-codeId"><code>codeId</code></a></td>
    <td></td>
    <td>Gets information about an ASP issued by a user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Lists the ASPs issued by a user.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a>, <a href="#parameter-codeId"><code>codeId</code></a></td>
    <td></td>
    <td>Deletes an ASP issued by a user.</td>
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
<tr id="parameter-codeId">
    <td><CopyableCode code="codeId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets information about an ASP issued by a user.

```sql
SELECT
name,
codeId,
creationTime,
etag,
kind,
lastTimeUsed,
userKey
FROM googleadmin.directory.asps
WHERE userKey = '{{ userKey }}' -- required
AND codeId = '{{ codeId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the ASPs issued by a user.

```sql
SELECT
etag,
items,
kind
FROM googleadmin.directory.asps
WHERE userKey = '{{ userKey }}' -- required;
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

Deletes an ASP issued by a user.

```sql
DELETE FROM googleadmin.directory.asps
WHERE userKey = '{{ userKey }}' --required
AND codeId = '{{ codeId }}' --required;
```
</TabItem>
</Tabs>
