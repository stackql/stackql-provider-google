--- 
title: plugins_style_guide
hide_title: false
hide_table_of_contents: false
keywords:
  - plugins_style_guide
  - apihub
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

Creates, updates, deletes, gets or lists a <code>plugins_style_guide</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>plugins_style_guide</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.plugins_style_guide" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_style_guide"
    values={[
        { label: 'get_style_guide', value: 'get_style_guide' }
    ]}
>
<TabItem value="get_style_guide">

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
    <td>Identifier. The name of the style guide. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/plugins/&#123;plugin&#125;/styleGuide`</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>object</code></td>
    <td>Required. Input only. The contents of the uploaded style guide. (id: GoogleCloudApihubV1StyleGuideContents)</td>
</tr>
<tr>
    <td><CopyableCode code="linter" /></td>
    <td><code>string</code></td>
    <td>Required. Target linter for the style guide.</td>
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
    <td><a href="#get_style_guide"><CopyableCode code="get_style_guide" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td></td>
    <td>Get the style guide being used for linting.</td>
</tr>
<tr>
    <td><a href="#update_style_guide"><CopyableCode code="update_style_guide" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update the styleGuide to be used for liniting in by API hub.</td>
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
<tr id="parameter-pluginsId">
    <td><CopyableCode code="pluginsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_style_guide"
    values={[
        { label: 'get_style_guide', value: 'get_style_guide' }
    ]}
>
<TabItem value="get_style_guide">

Get the style guide being used for linting.

```sql
SELECT
name,
contents,
linter
FROM google.apihub.plugins_style_guide
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pluginsId = '{{ pluginsId }}' -- required;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_style_guide"
    values={[
        { label: 'update_style_guide', value: 'update_style_guide' }
    ]}
>
<TabItem value="update_style_guide">

Update the styleGuide to be used for liniting in by API hub.

```sql
UPDATE google.apihub.plugins_style_guide
SET 
data__name = '{{ name }}',
data__linter = '{{ linter }}',
data__contents = '{{ contents }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pluginsId = '{{ pluginsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
contents,
linter;
```
</TabItem>
</Tabs>
