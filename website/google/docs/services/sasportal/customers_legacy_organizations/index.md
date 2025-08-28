--- 
title: customers_legacy_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - customers_legacy_organizations
  - sasportal
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

Creates, updates, deletes, gets or lists a <code>customers_legacy_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>customers_legacy_organizations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sasportal.customers_legacy_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="customers_list_legacy_organizations"
    values={[
        { label: 'customers_list_legacy_organizations', value: 'customers_list_legacy_organizations' }
    ]}
>
<TabItem value="customers_list_legacy_organizations">

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
    <td><CopyableCode code="organizations" /></td>
    <td><code>array</code></td>
    <td>Optional. Legacy SAS organizations.</td>
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
    <td><a href="#customers_list_legacy_organizations"><CopyableCode code="customers_list_legacy_organizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns a list of legacy organizations.</td>
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
    defaultValue="customers_list_legacy_organizations"
    values={[
        { label: 'customers_list_legacy_organizations', value: 'customers_list_legacy_organizations' }
    ]}
>
<TabItem value="customers_list_legacy_organizations">

Returns a list of legacy organizations.

```sql
SELECT
organizations
FROM google.sasportal.customers_legacy_organizations;
```
</TabItem>
</Tabs>
