--- 
title: target_pools_health_check
hide_title: false
hide_table_of_contents: false
keywords:
  - target_pools_health_check
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

Creates, updates, deletes, gets or lists a <code>target_pools_health_check</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>target_pools_health_check</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.target_pools_health_check" /></td></tr>
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
    <td><a href="#add_health_check"><CopyableCode code="add_health_check" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetPool"><code>targetPool</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds health check URLs to a target pool.</td>
</tr>
<tr>
    <td><a href="#remove_health_check"><CopyableCode code="remove_health_check" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetPool"><code>targetPool</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Removes health check URL from a target pool.</td>
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
    defaultValue="add_health_check"
    values={[
        { label: 'add_health_check', value: 'add_health_check' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_health_check">

Adds health check URLs to a target pool.

```sql
INSERT INTO google.compute.target_pools_health_check (
data__healthChecks,
project,
region,
targetPool,
requestId
)
SELECT 
'{{ healthChecks }}',
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
- name: target_pools_health_check
  props:
    - name: project
      value: string
      description: Required parameter for the target_pools_health_check resource.
    - name: region
      value: string
      description: Required parameter for the target_pools_health_check resource.
    - name: targetPool
      value: string
      description: Required parameter for the target_pools_health_check resource.
    - name: healthChecks
      value: array
      description: >
        The HttpHealthCheck to add to the target pool.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_health_check"
    values={[
        { label: 'remove_health_check', value: 'remove_health_check' }
    ]}
>
<TabItem value="remove_health_check">

Removes health check URL from a target pool.

```sql
DELETE FROM google.compute.target_pools_health_check
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND targetPool = '{{ targetPool }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
