--- 
title: keys_legacy_secret_key
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_legacy_secret_key
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists a <code>keys_legacy_secret_key</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>keys_legacy_secret_key</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.keys_legacy_secret_key" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="retrieve_legacy_secret_key"
    values={[
        { label: 'retrieve_legacy_secret_key', value: 'retrieve_legacy_secret_key' }
    ]}
>
<TabItem value="retrieve_legacy_secret_key">

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
    <td><CopyableCode code="legacySecretKey" /></td>
    <td><code>string</code></td>
    <td>The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes.</td>
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
    <td><a href="#retrieve_legacy_secret_key"><CopyableCode code="retrieve_legacy_secret_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.</td>
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
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="retrieve_legacy_secret_key"
    values={[
        { label: 'retrieve_legacy_secret_key', value: 'retrieve_legacy_secret_key' }
    ]}
>
<TabItem value="retrieve_legacy_secret_key">

Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

```sql
SELECT
legacySecretKey
FROM google.recaptchaenterprise.keys_legacy_secret_key
WHERE projectsId = '{{ projectsId }}' -- required
AND keysId = '{{ keysId }}' -- required;
```
</TabItem>
</Tabs>
