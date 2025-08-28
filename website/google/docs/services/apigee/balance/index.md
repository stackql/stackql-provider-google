--- 
title: balance
hide_title: false
hide_table_of_contents: false
keywords:
  - balance
  - apigee
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

Creates, updates, deletes, gets or lists a <code>balance</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>balance</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.balance" /></td></tr>
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
    <td><a href="#organizations_developers_balance_credit"><CopyableCode code="organizations_developers_balance_credit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Credits the account balance for the developer.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_balance_adjust"><CopyableCode code="organizations_developers_balance_adjust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.</td>
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
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="organizations_developers_balance_credit"
    values={[
        { label: 'organizations_developers_balance_credit', value: 'organizations_developers_balance_credit' },
        { label: 'organizations_developers_balance_adjust', value: 'organizations_developers_balance_adjust' }
    ]}
>
<TabItem value="organizations_developers_balance_credit">

Credits the account balance for the developer.

```sql
EXEC google.apigee.balance.organizations_developers_balance_credit 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required 
@@json=
'{
"transactionAmount": "{{ transactionAmount }}", 
"transactionId": "{{ transactionId }}"
}';
```
</TabItem>
<TabItem value="organizations_developers_balance_adjust">

Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.

```sql
EXEC google.apigee.balance.organizations_developers_balance_adjust 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required 
@@json=
'{
"adjustment": "{{ adjustment }}"
}';
```
</TabItem>
</Tabs>
