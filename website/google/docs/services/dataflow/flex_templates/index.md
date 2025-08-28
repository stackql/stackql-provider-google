--- 
title: flex_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - flex_templates
  - dataflow
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

Creates, updates, deletes, gets or lists a <code>flex_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>flex_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.flex_templates" /></td></tr>
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
    <td><a href="#projects_locations_flex_templates_launch"><CopyableCode code="projects_locations_flex_templates_launch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td></td>
    <td>Launch a job with a FlexTemplate.</td>
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
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_flex_templates_launch"
    values={[
        { label: 'projects_locations_flex_templates_launch', value: 'projects_locations_flex_templates_launch' }
    ]}
>
<TabItem value="projects_locations_flex_templates_launch">

Launch a job with a FlexTemplate.

```sql
EXEC google.dataflow.flex_templates.projects_locations_flex_templates_launch 
@projectId='{{ projectId }}' --required, 
@location='{{ location }}' --required 
@@json=
'{
"launchParameter": "{{ launchParameter }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
</Tabs>
