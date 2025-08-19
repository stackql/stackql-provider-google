--- 
title: interconnect_groups_members
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnect_groups_members
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

Creates, updates, deletes, gets or lists an <code>interconnect_groups_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>interconnect_groups_members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnect_groups_members" /></td></tr>
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
    <td><a href="#create_members"><CopyableCode code="create_members" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnectGroup"><code>interconnectGroup</code></a></td>
    <td></td>
    <td>Create Interconnects with redundancy by creating them in a specified interconnect group.</td>
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
<tr id="parameter-interconnectGroup">
    <td><CopyableCode code="interconnectGroup" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_members"
    values={[
        { label: 'create_members', value: 'create_members' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_members">

Create Interconnects with redundancy by creating them in a specified interconnect group.

```sql
INSERT INTO google.compute.interconnect_groups_members (
data__request,
project,
interconnectGroup
)
SELECT 
'{{ request }}',
'{{ project }}',
'{{ interconnectGroup }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: interconnect_groups_members
  props:
    - name: project
      value: string
      description: Required parameter for the interconnect_groups_members resource.
    - name: interconnectGroup
      value: string
      description: Required parameter for the interconnect_groups_members resource.
    - name: request
      value: object
```
</TabItem>
</Tabs>
