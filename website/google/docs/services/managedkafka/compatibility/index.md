--- 
title: compatibility
hide_title: false
hide_table_of_contents: false
keywords:
  - compatibility
  - managedkafka
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

Creates, updates, deletes, gets or lists a <code>compatibility</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>compatibility</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.compatibility" /></td></tr>
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
    <td><a href="#check_compatibility"><CopyableCode code="check_compatibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemaRegistriesId"><code>schemaRegistriesId</code></a>, <a href="#parameter-compatibilityId"><code>compatibilityId</code></a></td>
    <td></td>
    <td>Check compatibility of a schema with all versions or a specific version of a subject.</td>
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
<tr id="parameter-compatibilityId">
    <td><CopyableCode code="compatibilityId" /></td>
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
<tr id="parameter-schemaRegistriesId">
    <td><CopyableCode code="schemaRegistriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="check_compatibility"
    values={[
        { label: 'check_compatibility', value: 'check_compatibility' }
    ]}
>
<TabItem value="check_compatibility">

Check compatibility of a schema with all versions or a specific version of a subject.

```sql
EXEC google.managedkafka.compatibility.check_compatibility 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@schemaRegistriesId='{{ schemaRegistriesId }}' --required, 
@compatibilityId='{{ compatibilityId }}' --required 
@@json=
'{
"schemaType": "{{ schemaType }}", 
"schema": "{{ schema }}", 
"references": "{{ references }}", 
"verbose": {{ verbose }}
}';
```
</TabItem>
</Tabs>
