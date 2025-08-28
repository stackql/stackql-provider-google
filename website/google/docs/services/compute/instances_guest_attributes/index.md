--- 
title: instances_guest_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_guest_attributes
  - compute
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

Creates, updates, deletes, gets or lists an <code>instances_guest_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_guest_attributes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instances_guest_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_guest_attributes"
    values={[
        { label: 'get_guest_attributes', value: 'get_guest_attributes' }
    ]}
>
<TabItem value="get_guest_attributes">

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
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Type of the resource. Always compute#guestAttributes for guest attributes entry. (default: compute#guestAttributes)</td>
</tr>
<tr>
    <td><CopyableCode code="queryPath" /></td>
    <td><code>string</code></td>
    <td>The path to be queried. This can be the default namespace ('') or a nested namespace ('\/') or a specified key ('\/\').</td>
</tr>
<tr>
    <td><CopyableCode code="queryValue" /></td>
    <td><code>object</code></td>
    <td>[Output Only] The value of the requested queried path. (id: GuestAttributesValue)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="variableKey" /></td>
    <td><code>string</code></td>
    <td>The key to search for.</td>
</tr>
<tr>
    <td><CopyableCode code="variableValue" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The value found for the requested key.</td>
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
    <td><a href="#get_guest_attributes"><CopyableCode code="get_guest_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-queryPath"><code>queryPath</code></a>, <a href="#parameter-variableKey"><code>variableKey</code></a></td>
    <td>Returns the specified guest attributes entry.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-queryPath">
    <td><CopyableCode code="queryPath" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-variableKey">
    <td><CopyableCode code="variableKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_guest_attributes"
    values={[
        { label: 'get_guest_attributes', value: 'get_guest_attributes' }
    ]}
>
<TabItem value="get_guest_attributes">

Returns the specified guest attributes entry.

```sql
SELECT
kind,
queryPath,
queryValue,
selfLink,
variableKey,
variableValue
FROM google.compute.instances_guest_attributes
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instance = '{{ instance }}' -- required
AND queryPath = '{{ queryPath }}'
AND variableKey = '{{ variableKey }}';
```
</TabItem>
</Tabs>
