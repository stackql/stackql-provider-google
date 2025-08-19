--- 
title: image
hide_title: false
hide_table_of_contents: false
keywords:
  - image
  - datalabeling
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

Creates, updates, deletes, gets or lists an <code>image</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>image</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalabeling.image" /></td></tr>
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
    <td><a href="#projects_datasets_image_label"><CopyableCode code="projects_datasets_image_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td></td>
    <td> Starts a labeling task for image. The type of image labeling task is configured by feature in the request.</td>
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
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
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

## Lifecycle Methods

<Tabs
    defaultValue="projects_datasets_image_label"
    values={[
        { label: 'projects_datasets_image_label', value: 'projects_datasets_image_label' }
    ]}
>
<TabItem value="projects_datasets_image_label">

 Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

```sql
EXEC google.datalabeling.image.projects_datasets_image_label 
@projectsId='{{ projectsId }}' --required, 
@datasetsId='{{ datasetsId }}' --required 
@@json=
'{
"imageClassificationConfig": "{{ imageClassificationConfig }}", 
"boundingPolyConfig": "{{ boundingPolyConfig }}", 
"polylineConfig": "{{ polylineConfig }}", 
"segmentationConfig": "{{ segmentationConfig }}", 
"basicConfig": "{{ basicConfig }}", 
"feature": "{{ feature }}"
}';
```
</TabItem>
</Tabs>
