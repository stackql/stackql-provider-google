--- 
title: iam
hide_title: false
hide_table_of_contents: false
keywords:
  - iam
  - policytroubleshooter
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

Creates, updates, deletes, gets or lists an <code>iam</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>iam</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.policytroubleshooter.iam" /></td></tr>
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
    <td><a href="#troubleshoot"><CopyableCode code="troubleshoot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="troubleshoot"
    values={[
        { label: 'troubleshoot', value: 'troubleshoot' }
    ]}
>
<TabItem value="troubleshoot">

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.

```sql
EXEC google.policytroubleshooter.iam.troubleshoot 
@@json=
'{
"accessTuple": "{{ accessTuple }}"
}';
```
</TabItem>
</Tabs>
