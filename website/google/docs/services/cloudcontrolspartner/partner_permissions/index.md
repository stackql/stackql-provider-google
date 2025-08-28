--- 
title: partner_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_permissions
  - cloudcontrolspartner
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

Creates, updates, deletes, gets or lists a <code>partner_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>partner_permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcontrolspartner.partner_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partner_permissions"
    values={[
        { label: 'get_partner_permissions', value: 'get_partner_permissions' }
    ]}
>
<TabItem value="get_partner_permissions">

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
    <td>Identifier. Format: `organizations/&#123;organization&#125;/locations/&#123;location&#125;/customers/&#123;customer&#125;/workloads/&#123;workload&#125;/partnerPermissions`</td>
</tr>
<tr>
    <td><CopyableCode code="partnerPermissions" /></td>
    <td><code>array</code></td>
    <td>The partner permissions granted for the workload</td>
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
    <td><a href="#get_partner_permissions"><CopyableCode code="get_partner_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-workloadsId"><code>workloadsId</code></a></td>
    <td></td>
    <td>Gets the partner permissions granted for a workload</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadsId">
    <td><CopyableCode code="workloadsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_partner_permissions"
    values={[
        { label: 'get_partner_permissions', value: 'get_partner_permissions' }
    ]}
>
<TabItem value="get_partner_permissions">

Gets the partner permissions granted for a workload

```sql
SELECT
name,
partnerPermissions
FROM google.cloudcontrolspartner.partner_permissions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customersId = '{{ customersId }}' -- required
AND workloadsId = '{{ workloadsId }}' -- required;
```
</TabItem>
</Tabs>
