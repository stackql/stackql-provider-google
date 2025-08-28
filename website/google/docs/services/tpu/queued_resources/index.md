--- 
title: queued_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - queued_resources
  - tpu
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

Creates, updates, deletes, gets or lists a <code>queued_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>queued_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.tpu.queued_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The name of the QueuedResource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the QueuedResource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="guaranteed" /></td>
    <td><code>object</code></td>
    <td>Optional. The Guaranteed tier (id: Guaranteed)</td>
</tr>
<tr>
    <td><CopyableCode code="queueingPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The queueing policy of the QueuedRequest. (id: QueueingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationName" /></td>
    <td><code>string</code></td>
    <td>Optional. Name of the reservation in which the resource should be provisioned. Format: projects/&#123;project&#125;/locations/&#123;zone&#125;/reservations/&#123;reservation&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="spot" /></td>
    <td><code>object</code></td>
    <td>Optional. The Spot tier. (id: Spot)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Output only. State of the QueuedResource request. (id: QueuedResourceState)</td>
</tr>
<tr>
    <td><CopyableCode code="tpu" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines a TPU resource. (id: Tpu)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The name of the QueuedResource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the QueuedResource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="guaranteed" /></td>
    <td><code>object</code></td>
    <td>Optional. The Guaranteed tier (id: Guaranteed)</td>
</tr>
<tr>
    <td><CopyableCode code="queueingPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The queueing policy of the QueuedRequest. (id: QueueingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationName" /></td>
    <td><code>string</code></td>
    <td>Optional. Name of the reservation in which the resource should be provisioned. Format: projects/&#123;project&#125;/locations/&#123;zone&#125;/reservations/&#123;reservation&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="spot" /></td>
    <td><code>object</code></td>
    <td>Optional. The Spot tier. (id: Spot)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Output only. State of the QueuedResource request. (id: QueuedResourceState)</td>
</tr>
<tr>
    <td><CopyableCode code="tpu" /></td>
    <td><code>object</code></td>
    <td>Optional. Defines a TPU resource. (id: Tpu)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuedResourcesId"><code>queuedResourcesId</code></a></td>
    <td></td>
    <td>Gets details of a queued resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists queued resources.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-queuedResourceId"><code>queuedResourceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a QueuedResource TPU instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuedResourcesId"><code>queuedResourcesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a QueuedResource TPU instance.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-queuedResourcesId"><code>queuedResourcesId</code></a></td>
    <td></td>
    <td>Resets a QueuedResource TPU instance</td>
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
<tr id="parameter-queuedResourcesId">
    <td><CopyableCode code="queuedResourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-queuedResourceId">
    <td><CopyableCode code="queuedResourceId" /></td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a queued resource.

```sql
SELECT
name,
createTime,
guaranteed,
queueingPolicy,
reservationName,
spot,
state,
tpu
FROM google.tpu.queued_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND queuedResourcesId = '{{ queuedResourcesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists queued resources.

```sql
SELECT
name,
createTime,
guaranteed,
queueingPolicy,
reservationName,
spot,
state,
tpu
FROM google.tpu.queued_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a QueuedResource TPU instance.

```sql
INSERT INTO google.tpu.queued_resources (
data__tpu,
data__spot,
data__guaranteed,
data__queueingPolicy,
data__reservationName,
projectsId,
locationsId,
queuedResourceId,
requestId
)
SELECT 
'{{ tpu }}',
'{{ spot }}',
'{{ guaranteed }}',
'{{ queueingPolicy }}',
'{{ reservationName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ queuedResourceId }}',
'{{ requestId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: queued_resources
  props:
    - name: projectsId
      value: string
      description: Required parameter for the queued_resources resource.
    - name: locationsId
      value: string
      description: Required parameter for the queued_resources resource.
    - name: tpu
      value: object
      description: >
        Optional. Defines a TPU resource.
        
    - name: spot
      value: object
      description: >
        Optional. The Spot tier.
        
    - name: guaranteed
      value: object
      description: >
        Optional. The Guaranteed tier
        
    - name: queueingPolicy
      value: object
      description: >
        Optional. The queueing policy of the QueuedRequest.
        
    - name: reservationName
      value: string
      description: >
        Optional. Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}
        
    - name: queuedResourceId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a QueuedResource TPU instance.

```sql
DELETE FROM google.tpu.queued_resources
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND queuedResourcesId = '{{ queuedResourcesId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset"
    values={[
        { label: 'reset', value: 'reset' }
    ]}
>
<TabItem value="reset">

Resets a QueuedResource TPU instance

```sql
EXEC google.tpu.queued_resources.reset 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@queuedResourcesId='{{ queuedResourcesId }}' --required;
```
</TabItem>
</Tabs>
