--- 
title: relyingparty_recaptcha_param
hide_title: false
hide_table_of_contents: false
keywords:
  - relyingparty_recaptcha_param
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

Creates, updates, deletes, gets or lists a <code>relyingparty_recaptcha_param</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>relyingparty_recaptcha_param</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.identitytoolkit.relyingparty_recaptcha_param" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recaptcha_param"
    values={[
        { label: 'get_recaptcha_param', value: 'get_recaptcha_param' }
    ]}
>
<TabItem value="get_recaptcha_param">

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
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The fixed string "identitytoolkit#GetRecaptchaParamResponse". (default: identitytoolkit#GetRecaptchaParamResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="recaptchaSiteKey" /></td>
    <td><code>string</code></td>
    <td>Site key registered at recaptcha.</td>
</tr>
<tr>
    <td><CopyableCode code="recaptchaStoken" /></td>
    <td><code>string</code></td>
    <td>The stoken field for the recaptcha widget, used to request captcha challenge.</td>
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
    <td><a href="#get_recaptcha_param"><CopyableCode code="get_recaptcha_param" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get recaptcha secure param.</td>
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
    defaultValue="get_recaptcha_param"
    values={[
        { label: 'get_recaptcha_param', value: 'get_recaptcha_param' }
    ]}
>
<TabItem value="get_recaptcha_param">

Get recaptcha secure param.

```sql
SELECT
kind,
recaptchaSiteKey,
recaptchaStoken
FROM google.identitytoolkit.relyingparty_recaptcha_param;
```
</TabItem>
</Tabs>
