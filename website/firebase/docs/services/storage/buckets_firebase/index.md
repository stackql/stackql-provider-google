--- 
title: buckets_firebase
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets_firebase
  - storage
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>buckets_firebase</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>buckets_firebase</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.storage.buckets_firebase" /></td></tr>
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
    <td><a href="#add_firebase"><CopyableCode code="add_firebase" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Links a Google Cloud Storage bucket to a Firebase project.</td>
</tr>
<tr>
    <td><a href="#remove_firebase"><CopyableCode code="remove_firebase" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a></td>
    <td></td>
    <td>Unlinks a linked Google Cloud Storage bucket from a Firebase project.</td>
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
<tr id="parameter-bucketsId">
    <td><CopyableCode code="bucketsId" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="add_firebase"
    values={[
        { label: 'add_firebase', value: 'add_firebase' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_firebase">

Links a Google Cloud Storage bucket to a Firebase project.

```sql
INSERT INTO firebase.storage.buckets_firebase (
projectsId,
bucketsId
)
SELECT 
'{{ projectsId }}',
'{{ bucketsId }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: buckets_firebase
  props:
    - name: projectsId
      value: string
      description: Required parameter for the buckets_firebase resource.
    - name: bucketsId
      value: string
      description: Required parameter for the buckets_firebase resource.
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_firebase"
    values={[
        { label: 'remove_firebase', value: 'remove_firebase' }
    ]}
>
<TabItem value="remove_firebase">

Unlinks a linked Google Cloud Storage bucket from a Firebase project.

```sql
DELETE FROM firebase.storage.buckets_firebase
WHERE projectsId = '{{ projectsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required;
```
</TabItem>
</Tabs>
