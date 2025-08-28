--- 
title: human_review_config
hide_title: false
hide_table_of_contents: false
keywords:
  - human_review_config
  - documentai
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

Creates, updates, deletes, gets or lists a <code>human_review_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>human_review_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.human_review_config" /></td></tr>
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
    <td><a href="#projects_locations_processors_human_review_config_review_document"><CopyableCode code="projects_locations_processors_human_review_config_review_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-processorsId"><code>processorsId</code></a></td>
    <td></td>
    <td>Send a document for Human Review. The input document should be processed by the specified processor.</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-processorsId">
    <td><CopyableCode code="processorsId" /></td>
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
    defaultValue="projects_locations_processors_human_review_config_review_document"
    values={[
        { label: 'projects_locations_processors_human_review_config_review_document', value: 'projects_locations_processors_human_review_config_review_document' }
    ]}
>
<TabItem value="projects_locations_processors_human_review_config_review_document">

Send a document for Human Review. The input document should be processed by the specified processor.

```sql
EXEC google.documentai.human_review_config.projects_locations_processors_human_review_config_review_document 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@processorsId='{{ processorsId }}' --required 
@@json=
'{
"inlineDocument": "{{ inlineDocument }}", 
"enableSchemaValidation": {{ enableSchemaValidation }}, 
"priority": "{{ priority }}", 
"documentSchema": "{{ documentSchema }}"
}';
```
</TabItem>
</Tabs>
