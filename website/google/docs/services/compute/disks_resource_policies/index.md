--- 
title: disks_resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - disks_resource_policies
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

Creates, updates, deletes, gets or lists a <code>disks_resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>disks_resource_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.disks_resource_policies" /></td></tr>
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
    <td><a href="#add_resource_policies"><CopyableCode code="add_resource_policies" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.</td>
</tr>
<tr>
    <td><a href="#remove_resource_policies"><CopyableCode code="remove_resource_policies" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Removes resource policies from a regional disk.</td>
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
<tr id="parameter-disk">
    <td><CopyableCode code="disk" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_resource_policies"
    values={[
        { label: 'add_resource_policies', value: 'add_resource_policies' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_resource_policies">

Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.

```sql
INSERT INTO google.compute.disks_resource_policies (
data__resourcePolicies,
project,
region,
disk,
requestId
)
SELECT 
'{{ resourcePolicies }}',
'{{ project }}',
'{{ region }}',
'{{ disk }}',
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
- name: disks_resource_policies
  props:
    - name: project
      value: string
      description: Required parameter for the disks_resource_policies resource.
    - name: region
      value: string
      description: Required parameter for the disks_resource_policies resource.
    - name: disk
      value: string
      description: Required parameter for the disks_resource_policies resource.
    - name: resourcePolicies
      value: array
      description: >
        Resource policies to be added to this disk.
        
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_resource_policies"
    values={[
        { label: 'remove_resource_policies', value: 'remove_resource_policies' }
    ]}
>
<TabItem value="remove_resource_policies">

Removes resource policies from a regional disk.

```sql
DELETE FROM google.compute.disks_resource_policies
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND disk = '{{ disk }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
