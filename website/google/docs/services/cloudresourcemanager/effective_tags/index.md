--- 
title: effective_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_tags
  - cloudresourcemanager
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

Creates, updates, deletes, gets or lists an <code>effective_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>effective_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudresourcemanager.effective_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="inherited" /></td>
    <td><code>boolean</code></td>
    <td>Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource, inherited will be false.</td>
</tr>
<tr>
    <td><CopyableCode code="namespacedTagKey" /></td>
    <td><code>string</code></td>
    <td>The namespaced name of the TagKey. Can be in the form `&#123;organization_id&#125;/&#123;tag_key_short_name&#125;` or `&#123;project_id&#125;/&#123;tag_key_short_name&#125;` or `&#123;project_number&#125;/&#123;tag_key_short_name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="namespacedTagValue" /></td>
    <td><code>string</code></td>
    <td>The namespaced name of the TagValue. Can be in the form `&#123;organization_id&#125;/&#123;tag_key_short_name&#125;/&#123;tag_value_short_name&#125;` or `&#123;project_id&#125;/&#123;tag_key_short_name&#125;/&#123;tag_value_short_name&#125;` or `&#123;project_number&#125;/&#123;tag_key_short_name&#125;/&#123;tag_value_short_name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="tagKey" /></td>
    <td><code>string</code></td>
    <td>The name of the TagKey, in the format `tagKeys/&#123;id&#125;`, such as `tagKeys/123`.</td>
</tr>
<tr>
    <td><CopyableCode code="tagKeyParentName" /></td>
    <td><code>string</code></td>
    <td>The parent name of the tag key. Must be in the format `organizations/&#123;organization_id&#125;` or `projects/&#123;project_number&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="tagValue" /></td>
    <td><code>string</code></td>
    <td>Resource name for TagValue in the format `tagValues/456`.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.</td>
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
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

```sql
SELECT
inherited,
namespacedTagKey,
namespacedTagValue,
tagKey,
tagKeyParentName,
tagValue
FROM google.cloudresourcemanager.effective_tags
WHERE parent = '{{ parent }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>
