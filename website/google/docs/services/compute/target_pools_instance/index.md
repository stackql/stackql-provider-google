--- 
title: target_pools_instance
hide_title: false
hide_table_of_contents: false
keywords:
  - target_pools_instance
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

Creates, updates, deletes, gets or lists a <code>target_pools_instance</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_pools_instance</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.target_pools_instance" /></td></tr>
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
    <td><a href="#add_instance"><CopyableCode code="add_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetPool"><code>targetPool</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds an instance to a target pool.</td>
</tr>
<tr>
    <td><a href="#remove_instance"><CopyableCode code="remove_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetPool"><code>targetPool</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Removes instance URL from a target pool.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-targetPool">
    <td><CopyableCode code="targetPool" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_instance"
    values={[
        { label: 'add_instance', value: 'add_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_instance">

Adds an instance to a target pool.

```sql
INSERT INTO google.compute.target_pools_instance (
data__instances,
project,
region,
targetPool,
requestId
)
SELECT 
'{{ instances }}',
'{{ project }}',
'{{ region }}',
'{{ targetPool }}',
'{{ requestId }}'
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
- name: target_pools_instance
  props:
    - name: project
      value: string
      description: Required parameter for the target_pools_instance resource.
    - name: region
      value: string
      description: Required parameter for the target_pools_instance resource.
    - name: targetPool
      value: string
      description: Required parameter for the target_pools_instance resource.
    - name: instances
      value: array
      description: >
        A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs: - https://www.googleapis.com/compute/v1/projects/project-id/zones/zone /instances/instance-name - projects/project-id/zones/zone/instances/instance-name - zones/zone/instances/instance-name 
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_instance"
    values={[
        { label: 'remove_instance', value: 'remove_instance' }
    ]}
>
<TabItem value="remove_instance">

Removes instance URL from a target pool.

```sql
DELETE FROM google.compute.target_pools_instance
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND targetPool = '{{ targetPool }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
