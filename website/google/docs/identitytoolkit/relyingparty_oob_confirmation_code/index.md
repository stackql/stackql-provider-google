--- 
title: relyingparty_oob_confirmation_code
hide_title: false
hide_table_of_contents: false
keywords:
  - relyingparty_oob_confirmation_code
  - identitytoolkit
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

Creates, updates, deletes, gets or lists a <code>relyingparty_oob_confirmation_code</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>relyingparty_oob_confirmation_code</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.identitytoolkit.relyingparty_oob_confirmation_code" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_oob_confirmation_code"
    values={[
        { label: 'get_oob_confirmation_code', value: 'get_oob_confirmation_code' }
    ]}
>
<TabItem value="get_oob_confirmation_code">

Response of getting a code for user confirmation (reset password, change email etc.).

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
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address that the email is sent to.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The fixed string "identitytoolkit#GetOobConfirmationCodeResponse". (default: identitytoolkit#GetOobConfirmationCodeResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="oobCode" /></td>
    <td><code>string</code></td>
    <td>The code to be send to the user.</td>
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
    <td><a href="#get_oob_confirmation_code"><CopyableCode code="get_oob_confirmation_code" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get a code for user action confirmation.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_oob_confirmation_code"
    values={[
        { label: 'get_oob_confirmation_code', value: 'get_oob_confirmation_code' }
    ]}
>
<TabItem value="get_oob_confirmation_code">

Get a code for user action confirmation.

```sql
SELECT
email,
kind,
oobCode
FROM google.identitytoolkit.relyingparty_oob_confirmation_code;
```
</TabItem>
</Tabs>
