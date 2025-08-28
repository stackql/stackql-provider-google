--- 
title: databases_split_points
hide_title: false
hide_table_of_contents: false
keywords:
  - databases_split_points
  - spanner
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

Creates, updates, deletes, gets or lists a <code>databases_split_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>databases_split_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.spanner.databases_split_points" /></td></tr>
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
    <td><a href="#projects_instances_databases_add_split_points"><CopyableCode code="projects_instances_databases_add_split_points" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Adds split points to specified tables and indexes of a database.</td>
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
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="projects_instances_databases_add_split_points"
    values={[
        { label: 'projects_instances_databases_add_split_points', value: 'projects_instances_databases_add_split_points' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_instances_databases_add_split_points">

Adds split points to specified tables and indexes of a database.

```sql
INSERT INTO google.spanner.databases_split_points (
data__splitPoints,
data__initiator,
projectsId,
instancesId,
databasesId
)
SELECT 
'{{ splitPoints }}',
'{{ initiator }}',
'{{ projectsId }}',
'{{ instancesId }}',
'{{ databasesId }}'
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: databases_split_points
  props:
    - name: projectsId
      value: string
      description: Required parameter for the databases_split_points resource.
    - name: instancesId
      value: string
      description: Required parameter for the databases_split_points resource.
    - name: databasesId
      value: string
      description: Required parameter for the databases_split_points resource.
    - name: splitPoints
      value: array
      description: >
        Required. The split points to add.
        
    - name: initiator
      value: string
      description: >
        Optional. A user-supplied tag associated with the split points. For example, "initial_data_load", "special_event_1". Defaults to "CloudAddSplitPointsAPI" if not specified. The length of the tag must not exceed 50 characters, or else it is trimmed. Only valid UTF8 characters are allowed.
        
```
</TabItem>
</Tabs>
