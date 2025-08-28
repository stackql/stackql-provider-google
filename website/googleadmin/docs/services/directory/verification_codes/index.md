--- 
title: verification_codes
hide_title: false
hide_table_of_contents: false
keywords:
  - verification_codes
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

Creates, updates, deletes, gets or lists a <code>verification_codes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>verification_codes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.verification_codes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>A list of verification code resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. This is always `admin#directory#verificationCodesList`. (default: admin#directory#verificationCodesList)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Returns the current set of valid backup verification codes for the specified user.</td>
</tr>
<tr>
    <td><a href="#generate"><CopyableCode code="generate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Generates new backup verification codes for the user.</td>
</tr>
<tr>
    <td><a href="#invalidate"><CopyableCode code="invalidate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Invalidates the current backup verification codes for the user.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns the current set of valid backup verification codes for the specified user.

```sql
SELECT
etag,
items,
kind
FROM googleadmin.directory.verification_codes
WHERE userKey = '{{ userKey }}' -- required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate"
    values={[
        { label: 'generate', value: 'generate' },
        { label: 'invalidate', value: 'invalidate' }
    ]}
>
<TabItem value="generate">

Generates new backup verification codes for the user.

```sql
EXEC googleadmin.directory.verification_codes.generate 
@userKey='{{ userKey }}' --required;
```
</TabItem>
<TabItem value="invalidate">

Invalidates the current backup verification codes for the user.

```sql
EXEC googleadmin.directory.verification_codes.invalidate 
@userKey='{{ userKey }}' --required;
```
</TabItem>
</Tabs>
