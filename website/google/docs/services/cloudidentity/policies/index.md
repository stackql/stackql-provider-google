--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - cloudidentity
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.policies" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifier. The [resource name](https://cloud.google.com/apis/design/resource_names) of the Policy. Format: policies/&#123;policy&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. Customer that the Policy belongs to. The value is in the format 'customers/&#123;customerId&#125;'. The `customerId` must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793.</td>
</tr>
<tr>
    <td><CopyableCode code="policyQuery" /></td>
    <td><code>object</code></td>
    <td>Required. The PolicyQuery the Setting applies to. (id: PolicyQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="setting" /></td>
    <td><code>object</code></td>
    <td>Required. The Setting configured by this Policy. (id: Setting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the policy.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifier. The [resource name](https://cloud.google.com/apis/design/resource_names) of the Policy. Format: policies/&#123;policy&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. Customer that the Policy belongs to. The value is in the format 'customers/&#123;customerId&#125;'. The `customerId` must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793.</td>
</tr>
<tr>
    <td><CopyableCode code="policyQuery" /></td>
    <td><code>object</code></td>
    <td>Required. The PolicyQuery the Setting applies to. (id: PolicyQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="setting" /></td>
    <td><code>object</code></td>
    <td>Required. The Setting configured by this Policy. (id: Setting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the policy.</td>
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
    <td><a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Get a Policy</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List Policies</td>
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
<tr id="parameter-policiesId">
    <td><CopyableCode code="policiesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
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

Get a Policy

```sql
SELECT
name,
customer,
policyQuery,
setting,
type
FROM google.cloudidentity.policies
WHERE policiesId = '{{ policiesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List Policies

```sql
SELECT
name,
customer,
policyQuery,
setting,
type
FROM google.cloudidentity.policies
WHERE pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
```
</TabItem>
</Tabs>
