--- 
title: service_perimeters_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_perimeters_iam_policies
  - accesscontextmanager
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

Creates, updates, deletes, gets or lists a <code>service_perimeters_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_perimeters_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.accesscontextmanager.service_perimeters_iam_policies" /></td></tr>
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
    <td><a href="#test_iam_permissions"><CopyableCode code="test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accessPoliciesId"><code>accessPoliciesId</code></a>, <a href="#parameter-servicePerimetersId"><code>servicePerimetersId</code></a></td>
    <td></td>
    <td>Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.</td>
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
<tr id="parameter-accessPoliciesId">
    <td><CopyableCode code="accessPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicePerimetersId">
    <td><CopyableCode code="servicePerimetersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="test_iam_permissions"
    values={[
        { label: 'test_iam_permissions', value: 'test_iam_permissions' }
    ]}
>
<TabItem value="test_iam_permissions">

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

```sql
EXEC google.accesscontextmanager.service_perimeters_iam_policies.test_iam_permissions 
@accessPoliciesId='{{ accessPoliciesId }}' --required, 
@servicePerimetersId='{{ servicePerimetersId }}' --required 
@@json=
'{
"permissions": "{{ permissions }}"
}';
```
</TabItem>
</Tabs>
