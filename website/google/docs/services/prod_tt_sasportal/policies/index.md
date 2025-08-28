--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - prod_tt_sasportal
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.prod_tt_sasportal.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="policies_get"
    values={[
        { label: 'policies_get', value: 'policies_get' }
    ]}
>
<TabItem value="policies_get">

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
    <td><CopyableCode code="assignments" /></td>
    <td><code>array</code></td>
    <td>List of assignments</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string (byte)</code></td>
    <td>The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly.</td>
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
    <td><a href="#policies_get"><CopyableCode code="policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.</td>
</tr>
<tr>
    <td><a href="#policies_set"><CopyableCode code="policies_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Sets the access control policy on the specified resource. Replaces any existing policy.</td>
</tr>
<tr>
    <td><a href="#policies_test"><CopyableCode code="policies_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Returns permissions that a caller has on the specified resource.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="policies_get"
    values={[
        { label: 'policies_get', value: 'policies_get' }
    ]}
>
<TabItem value="policies_get">

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

```sql
SELECT
assignments,
etag
FROM google.prod_tt_sasportal.policies;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="policies_set"
    values={[
        { label: 'policies_set', value: 'policies_set' },
        { label: 'policies_test', value: 'policies_test' }
    ]}
>
<TabItem value="policies_set">

Sets the access control policy on the specified resource. Replaces any existing policy.

```sql
EXEC google.prod_tt_sasportal.policies.policies_set 
@@json=
'{
"resource": "{{ resource }}", 
"policy": "{{ policy }}", 
"disableNotification": {{ disableNotification }}
}';
```
</TabItem>
<TabItem value="policies_test">

Returns permissions that a caller has on the specified resource.

```sql
EXEC google.prod_tt_sasportal.policies.policies_test 
@@json=
'{
"resource": "{{ resource }}", 
"permissions": "{{ permissions }}"
}';
```
</TabItem>
</Tabs>
