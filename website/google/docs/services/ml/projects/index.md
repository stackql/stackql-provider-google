--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - ml
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ml.projects" /></td></tr>
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
    <td><a href="#projects_predict"><CopyableCode code="projects_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Performs online prediction on the data in the request. &#123;% dynamic include "/ai-platform/includes/___predict-request" %&#125; </td>
</tr>
<tr>
    <td><a href="#projects_explain"><CopyableCode code="projects_explain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Performs explanation on the data in the request. &#123;% dynamic include "/ai-platform/includes/___explain-request" %&#125; </td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_predict"
    values={[
        { label: 'projects_predict', value: 'projects_predict' },
        { label: 'projects_explain', value: 'projects_explain' }
    ]}
>
<TabItem value="projects_predict">

Performs online prediction on the data in the request. &#123;% dynamic include "/ai-platform/includes/___predict-request" %&#125; 

```sql
EXEC google.ml.projects.projects_predict 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"httpBody": "{{ httpBody }}"
}';
```
</TabItem>
<TabItem value="projects_explain">

Performs explanation on the data in the request. &#123;% dynamic include "/ai-platform/includes/___explain-request" %&#125; 

```sql
EXEC google.ml.projects.projects_explain 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"httpBody": "{{ httpBody }}"
}';
```
</TabItem>
</Tabs>
