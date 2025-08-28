--- 
title: networks_vpc_service_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - networks_vpc_service_controls
  - servicenetworking
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

Creates, updates, deletes, gets or lists a <code>networks_vpc_service_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>networks_vpc_service_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.networks_vpc_service_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpc_service_controls"
    values={[
        { label: 'get_vpc_service_controls', value: 'get_vpc_service_controls' }
    ]}
>
<TabItem value="get_vpc_service_controls">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the VPC Service Controls are enabled or disabled for the connection. If the consumer called the EnableVpcServiceControls method, then this is true. If the consumer called DisableVpcServiceControls, then this is false. The default is false.</td>
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
    <td><a href="#get_vpc_service_controls"><CopyableCode code="get_vpc_service_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a></td>
    <td></td>
    <td>Consumers use this method to find out the state of VPC Service Controls. The controls could be enabled or disabled for a connection.</td>
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
<tr id="parameter-networksId">
    <td><CopyableCode code="networksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpc_service_controls"
    values={[
        { label: 'get_vpc_service_controls', value: 'get_vpc_service_controls' }
    ]}
>
<TabItem value="get_vpc_service_controls">

Consumers use this method to find out the state of VPC Service Controls. The controls could be enabled or disabled for a connection.

```sql
SELECT
enabled
FROM google.servicenetworking.networks_vpc_service_controls
WHERE servicesId = '{{ servicesId }}' -- required
AND projectsId = '{{ projectsId }}' -- required
AND networksId = '{{ networksId }}' -- required;
```
</TabItem>
</Tabs>
