--- 
title: networks_consumer_config
hide_title: false
hide_table_of_contents: false
keywords:
  - networks_consumer_config
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

Creates, updates, deletes, gets or lists a <code>networks_consumer_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>networks_consumer_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.networks_consumer_config" /></td></tr>
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
    <td><a href="#update_consumer_config"><CopyableCode code="update_consumer_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a></td>
    <td></td>
    <td>Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_consumer_config"
    values={[
        { label: 'update_consumer_config', value: 'update_consumer_config' }
    ]}
>
<TabItem value="update_consumer_config">

Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

```sql
UPDATE google.servicenetworking.networks_consumer_config
SET 
data__consumerConfig = '{{ consumerConfig }}'
WHERE 
servicesId = '{{ servicesId }}' --required
AND projectsId = '{{ projectsId }}' --required
AND networksId = '{{ networksId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
