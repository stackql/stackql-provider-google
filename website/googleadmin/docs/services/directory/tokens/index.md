--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tokens</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.tokens" /></td></tr>
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
    <td><CopyableCode code="anonymous" /></td>
    <td><code>boolean</code></td>
    <td>Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.</td>
</tr>
<tr>
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>The Client ID of the application the token is issued to.</td>
</tr>
<tr>
    <td><CopyableCode code="displayText" /></td>
    <td><code>string</code></td>
    <td>The displayable name of the application the token is issued to.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#token`. (default: admin#directory#token)</td>
</tr>
<tr>
    <td><CopyableCode code="nativeApp" /></td>
    <td><code>boolean</code></td>
    <td>Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>A list of authorization scopes the application is granted.</td>
</tr>
<tr>
    <td><CopyableCode code="userKey" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the user that issued the token.</td>
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
    <td>A list of Token resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the API resource. This is always `admin#directory#tokenList`. (default: admin#directory#tokenList)</td>
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
    <td><a href="#parameter-userKey"><code>userKey</code></a>, <a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Gets information about an access token issued by a user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Returns the set of tokens specified user has issued to 3rd party applications.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a>, <a href="#parameter-clientId"><code>clientId</code></a></td>
    <td></td>
    <td>Deletes all access tokens issued by a user for an application.</td>
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
<tr id="parameter-clientId">
    <td><CopyableCode code="clientId" /></td>
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

Gets information about an access token issued by a user.

```sql
SELECT
anonymous,
clientId,
displayText,
etag,
kind,
nativeApp,
scopes,
userKey
FROM googleadmin.directory.tokens
WHERE userKey = '{{ userKey }}' -- required
AND clientId = '{{ clientId }}' -- required;
```
</TabItem>
<TabItem value="list">

Returns the set of tokens specified user has issued to 3rd party applications.

```sql
SELECT
etag,
items,
kind
FROM googleadmin.directory.tokens
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

Deletes all access tokens issued by a user for an application.

```sql
DELETE FROM googleadmin.directory.tokens
WHERE userKey = '{{ userKey }}' --required
AND clientId = '{{ clientId }}' --required;
```
</TabItem>
</Tabs>
