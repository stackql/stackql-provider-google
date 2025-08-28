--- 
title: iap
hide_title: false
hide_table_of_contents: false
keywords:
  - iap
  - iap
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

Creates, updates, deletes, gets or lists an <code>iap</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iap</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.iap.iap" /></td></tr>
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
    <td><a href="#validate_attribute_expression"><CopyableCode code="validate_attribute_expression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-v1Id"><code>v1Id</code></a></td>
    <td><a href="#parameter-expression"><code>expression</code></a></td>
    <td>Validates that a given CEL expression conforms to IAP restrictions.</td>
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
<tr id="parameter-v1Id">
    <td><CopyableCode code="v1Id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-expression">
    <td><CopyableCode code="expression" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="validate_attribute_expression"
    values={[
        { label: 'validate_attribute_expression', value: 'validate_attribute_expression' }
    ]}
>
<TabItem value="validate_attribute_expression">

Validates that a given CEL expression conforms to IAP restrictions.

```sql
EXEC google.iap.iap.validate_attribute_expression 
@v1Id='{{ v1Id }}' --required, 
@expression='{{ expression }}';
```
</TabItem>
</Tabs>
