--- 
title: limits_label
hide_title: false
hide_table_of_contents: false
keywords:
  - limits_label
  - drivelabelsv2
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>limits_label</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>limits_label</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivelabelsv2.limits_label" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_label"
    values={[
        { label: 'get_label', value: 'get_label' }
    ]}
>
<TabItem value="get_label">

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
    <td>Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldLimits" /></td>
    <td><code>object</code></td>
    <td>The limits for fields. (id: GoogleAppsDriveLabelsV2FieldLimits)</td>
</tr>
<tr>
    <td><CopyableCode code="maxDeletedFields" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of published fields that can be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDescriptionLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of characters allowed for the description.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDraftRevisions" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of draft revisions that will be kept before deleting old drafts.</td>
</tr>
<tr>
    <td><CopyableCode code="maxFields" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of fields allowed within the label.</td>
</tr>
<tr>
    <td><CopyableCode code="maxTitleLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of characters allowed for the title.</td>
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
    <td><a href="#get_label"><CopyableCode code="get_label" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Get the constraints on the structure of a label; such as, the maximum number of fields allowed and maximum length of the label title.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_label"
    values={[
        { label: 'get_label', value: 'get_label' }
    ]}
>
<TabItem value="get_label">

Get the constraints on the structure of a label; such as, the maximum number of fields allowed and maximum length of the label title.

```sql
SELECT
name,
fieldLimits,
maxDeletedFields,
maxDescriptionLength,
maxDraftRevisions,
maxFields,
maxTitleLength
FROM googleworkspace.drivelabelsv2.limits_label
WHERE name = '{{ name }}';
```
</TabItem>
</Tabs>
