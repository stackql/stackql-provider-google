--- 
title: customers
hide_title: false
hide_table_of_contents: false
keywords:
  - customers
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

Creates, updates, deletes, gets or lists a <code>customers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.customers" /></td></tr>
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
    <td>The unique ID for the customer's Google Workspace account. (Readonly)</td>
</tr>
<tr>
    <td><CopyableCode code="alternateEmail" /></td>
    <td><code>string</code></td>
    <td>The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`</td>
</tr>
<tr>
    <td><CopyableCode code="customerCreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The customer's creation time (Readonly)</td>
</tr>
<tr>
    <td><CopyableCode code="customerDomain" /></td>
    <td><code>string</code></td>
    <td>The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Identifies the resource as a customer. Value: `admin#directory#customer` (default: admin#directory#customer)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The customer's ISO 639-2 language code. See the [Language Codes](https://developers.google.com/workspace/admin/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.</td>
</tr>
<tr>
    <td><CopyableCode code="phoneNumber" /></td>
    <td><code>string</code></td>
    <td>The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.</td>
</tr>
<tr>
    <td><CopyableCode code="postalAddress" /></td>
    <td><code>object</code></td>
    <td>The customer's postal address information. (id: CustomerPostalAddress)</td>
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
    <td><a href="#parameter-customerKey"><code>customerKey</code></a></td>
    <td></td>
    <td>Retrieves a customer.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customerKey"><code>customerKey</code></a></td>
    <td></td>
    <td>Patches a customer.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-customerKey"><code>customerKey</code></a></td>
    <td></td>
    <td>Updates a customer.</td>
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
<tr id="parameter-customerKey">
    <td><CopyableCode code="customerKey" /></td>
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

Retrieves a customer.

```sql
SELECT
id,
alternateEmail,
customerCreationTime,
customerDomain,
etag,
kind,
language,
phoneNumber,
postalAddress
FROM googleadmin.directory.customers
WHERE customerKey = '{{ customerKey }}' -- required;
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

Patches a customer.

```sql
UPDATE googleadmin.directory.customers
SET 
data__id = '{{ id }}',
data__customerDomain = '{{ customerDomain }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__alternateEmail = '{{ alternateEmail }}',
data__customerCreationTime = '{{ customerCreationTime }}',
data__postalAddress = '{{ postalAddress }}',
data__phoneNumber = '{{ phoneNumber }}',
data__language = '{{ language }}'
WHERE 
customerKey = '{{ customerKey }}' --required
RETURNING
id,
alternateEmail,
customerCreationTime,
customerDomain,
etag,
kind,
language,
phoneNumber,
postalAddress;
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

Updates a customer.

```sql
REPLACE googleadmin.directory.customers
SET 
data__id = '{{ id }}',
data__customerDomain = '{{ customerDomain }}',
data__kind = '{{ kind }}',
data__etag = '{{ etag }}',
data__alternateEmail = '{{ alternateEmail }}',
data__customerCreationTime = '{{ customerCreationTime }}',
data__postalAddress = '{{ postalAddress }}',
data__phoneNumber = '{{ phoneNumber }}',
data__language = '{{ language }}'
WHERE 
customerKey = '{{ customerKey }}' --required
RETURNING
id,
alternateEmail,
customerCreationTime,
customerDomain,
etag,
kind,
language,
phoneNumber,
postalAddress;
```
</TabItem>
</Tabs>
