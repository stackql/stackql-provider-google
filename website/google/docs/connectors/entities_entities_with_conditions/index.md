--- 
title: entities_entities_with_conditions
hide_title: false
hide_table_of_contents: false
keywords:
  - entities_entities_with_conditions
  - connectors
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

Creates, updates, deletes, gets or lists an <code>entities_entities_with_conditions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entities_entities_with_conditions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.connectors.entities_entities_with_conditions" /></td></tr>
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
    <td><a href="#update_entities_with_conditions"><CopyableCode code="update_entities_with_conditions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-conditions"><code>conditions</code></a></td>
    <td>Updates entities based on conditions specified in the request and not on entity id.</td>
</tr>
<tr>
    <td><a href="#delete_entities_with_conditions"><CopyableCode code="delete_entities_with_conditions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-conditions"><code>conditions</code></a></td>
    <td>Deletes entities based on conditions specified in the request and not on entity id.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-entityTypesId">
    <td><CopyableCode code="entityTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-conditions">
    <td><CopyableCode code="conditions" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_entities_with_conditions"
    values={[
        { label: 'update_entities_with_conditions', value: 'update_entities_with_conditions' }
    ]}
>
<TabItem value="update_entities_with_conditions">

Updates entities based on conditions specified in the request and not on entity id.

```sql
UPDATE google.connectors.entities_entities_with_conditions
SET 
data__fields = '{{ fields }}',
data__metadata = '{{ metadata }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND conditions = '{{ conditions}}'
RETURNING
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entities_with_conditions"
    values={[
        { label: 'delete_entities_with_conditions', value: 'delete_entities_with_conditions' }
    ]}
>
<TabItem value="delete_entities_with_conditions">

Deletes entities based on conditions specified in the request and not on entity id.

```sql
DELETE FROM google.connectors.entities_entities_with_conditions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND conditions = '{{ conditions }}';
```
</TabItem>
</Tabs>
