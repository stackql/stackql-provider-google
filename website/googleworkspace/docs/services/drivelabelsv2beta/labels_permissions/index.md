--- 
title: labels_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - labels_permissions
  - drivelabelsv2beta
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

Creates, updates, deletes, gets or lists a <code>labels_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>labels_permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivelabelsv2beta.labels_permissions" /></td></tr>
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
    <td><a href="#update_permissions"><CopyableCode code="update_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-labelsId"><code>labelsId</code></a></td>
    <td><a href="#parameter-useAdminAccess"><code>useAdminAccess</code></a></td>
    <td>Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.</td>
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
<tr id="parameter-labelsId">
    <td><CopyableCode code="labelsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-useAdminAccess">
    <td><CopyableCode code="useAdminAccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_permissions"
    values={[
        { label: 'update_permissions', value: 'update_permissions' }
    ]}
>
<TabItem value="update_permissions">

Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

```sql
UPDATE googleworkspace.drivelabelsv2beta.labels_permissions
SET 
data__person = '{{ person }}',
data__group = '{{ group }}',
data__audience = '{{ audience }}',
data__name = '{{ name }}',
data__email = '{{ email }}',
data__role = '{{ role }}'
WHERE 
labelsId = '{{ labelsId }}' --required
AND useAdminAccess = {{ useAdminAccess}}
RETURNING
name,
audience,
email,
group,
person,
role;
```
</TabItem>
</Tabs>
