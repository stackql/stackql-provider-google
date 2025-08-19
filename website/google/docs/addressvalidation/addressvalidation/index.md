--- 
title: addressvalidation
hide_title: false
hide_table_of_contents: false
keywords:
  - addressvalidation
  - addressvalidation
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

Creates, updates, deletes, gets or lists an <code>addressvalidation</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>addressvalidation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.addressvalidation.addressvalidation" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#validate_address"><CopyableCode code="validate_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Validates an address.</td>
</tr>
<tr>
    <td><a href="#provide_validation_feedback"><CopyableCode code="provide_validation_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of `ValidateAddress` requests needed to validate an address fully.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="validate_address"
    values={[
        { label: 'validate_address', value: 'validate_address' },
        { label: 'provide_validation_feedback', value: 'provide_validation_feedback' }
    ]}
>
<TabItem value="validate_address">

Validates an address.

```sql
EXEC google.addressvalidation.addressvalidation.validate_address 
@@json=
'{
"address": "{{ address }}", 
"previousResponseId": "{{ previousResponseId }}", 
"enableUspsCass": {{ enableUspsCass }}, 
"languageOptions": "{{ languageOptions }}", 
"sessionToken": "{{ sessionToken }}"
}';
```
</TabItem>
<TabItem value="provide_validation_feedback">

Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of `ValidateAddress` requests needed to validate an address fully.

```sql
EXEC google.addressvalidation.addressvalidation.provide_validation_feedback 
@@json=
'{
"conclusion": "{{ conclusion }}", 
"responseId": "{{ responseId }}"
}';
```
</TabItem>
</Tabs>
