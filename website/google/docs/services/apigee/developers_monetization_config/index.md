--- 
title: developers_monetization_config
hide_title: false
hide_table_of_contents: false
keywords:
  - developers_monetization_config
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

Creates, updates, deletes, gets or lists a <code>developers_monetization_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>developers_monetization_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.developers_monetization_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_developers_get_monetization_config"
    values={[
        { label: 'organizations_developers_get_monetization_config', value: 'organizations_developers_get_monetization_config' }
    ]}
>
<TabItem value="organizations_developers_get_monetization_config">

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
    <td><CopyableCode code="billingType" /></td>
    <td><code>string</code></td>
    <td>Billing type.</td>
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
    <td><a href="#organizations_developers_get_monetization_config"><CopyableCode code="organizations_developers_get_monetization_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Gets the monetization configuration for the developer.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_update_monetization_config"><CopyableCode code="organizations_developers_update_monetization_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Updates the monetization configuration for the developer.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="organizations_developers_get_monetization_config"
    values={[
        { label: 'organizations_developers_get_monetization_config', value: 'organizations_developers_get_monetization_config' }
    ]}
>
<TabItem value="organizations_developers_get_monetization_config">

Gets the monetization configuration for the developer.

```sql
SELECT
billingType
FROM google.apigee.developers_monetization_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_developers_update_monetization_config"
    values={[
        { label: 'organizations_developers_update_monetization_config', value: 'organizations_developers_update_monetization_config' }
    ]}
>
<TabItem value="organizations_developers_update_monetization_config">

Updates the monetization configuration for the developer.

```sql
REPLACE google.apigee.developers_monetization_config
SET 
data__billingType = '{{ billingType }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
RETURNING
billingType;
```
</TabItem>
</Tabs>
