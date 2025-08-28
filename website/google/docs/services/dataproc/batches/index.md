--- 
title: batches
hide_title: false
hide_table_of_contents: false
keywords:
  - batches
  - dataproc
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

Creates, updates, deletes, gets or lists a <code>batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>batches</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_batches_get"
    values={[
        { label: 'projects_locations_batches_get', value: 'projects_locations_batches_get' },
        { label: 'projects_locations_batches_list', value: 'projects_locations_batches_list' }
    ]}
>
<TabItem value="projects_locations_batches_get">

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
    <td>Output only. The resource name of the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the batch was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment configuration for the batch execution. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the operation associated with this batch.</td>
</tr>
<tr>
    <td><CopyableCode code="pysparkBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. PySpark batch config. (id: PySparkBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Runtime configuration for the batch execution. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime information about batch execution. (id: RuntimeInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. Spark batch config. (id: SparkBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkRBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. SparkR batch config. (id: SparkRBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkSqlBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. SparkSql batch config. (id: SparkSqlBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="stateHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. Historical state information for the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Batch state details, such as a failure description if the state is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the batch entered a current state.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_batches_list">

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
    <td>Output only. The resource name of the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the batch was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Environment configuration for the batch execution. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the operation associated with this batch.</td>
</tr>
<tr>
    <td><CopyableCode code="pysparkBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. PySpark batch config. (id: PySparkBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Runtime configuration for the batch execution. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Runtime information about batch execution. (id: RuntimeInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. Spark batch config. (id: SparkBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkRBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. SparkR batch config. (id: SparkRBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="sparkSqlBatch" /></td>
    <td><code>object</code></td>
    <td>Optional. SparkSql batch config. (id: SparkSqlBatch)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="stateHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. Historical state information for the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Batch state details, such as a failure description if the state is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the batch entered a current state.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch.</td>
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
    <td><a href="#projects_locations_batches_get"><CopyableCode code="projects_locations_batches_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a></td>
    <td></td>
    <td>Gets the batch workload resource representation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_list"><CopyableCode code="projects_locations_batches_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists batch workloads.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_create"><CopyableCode code="projects_locations_batches_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-batchId"><code>batchId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a batch workload that executes asynchronously.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_delete"><CopyableCode code="projects_locations_batches_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a></td>
    <td></td>
    <td>Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.</td>
</tr>
<tr>
    <td><a href="#projects_locations_batches_analyze"><CopyableCode code="projects_locations_batches_analyze" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-batchesId"><code>batchesId</code></a></td>
    <td></td>
    <td>Analyze a Batch for possible recommendations and insights.</td>
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
<tr id="parameter-batchesId">
    <td><CopyableCode code="batchesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-batchId">
    <td><CopyableCode code="batchId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_batches_get"
    values={[
        { label: 'projects_locations_batches_get', value: 'projects_locations_batches_get' },
        { label: 'projects_locations_batches_list', value: 'projects_locations_batches_list' }
    ]}
>
<TabItem value="projects_locations_batches_get">

Gets the batch workload resource representation.

```sql
SELECT
name,
createTime,
creator,
environmentConfig,
labels,
operation,
pysparkBatch,
runtimeConfig,
runtimeInfo,
sparkBatch,
sparkRBatch,
sparkSqlBatch,
state,
stateHistory,
stateMessage,
stateTime,
uuid
FROM google.dataproc.batches
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND batchesId = '{{ batchesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_batches_list">

Lists batch workloads.

```sql
SELECT
name,
createTime,
creator,
environmentConfig,
labels,
operation,
pysparkBatch,
runtimeConfig,
runtimeInfo,
sparkBatch,
sparkRBatch,
sparkSqlBatch,
state,
stateHistory,
stateMessage,
stateTime,
uuid
FROM google.dataproc.batches
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_batches_create"
    values={[
        { label: 'projects_locations_batches_create', value: 'projects_locations_batches_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_batches_create">

Creates a batch workload that executes asynchronously.

```sql
INSERT INTO google.dataproc.batches (
data__pysparkBatch,
data__sparkBatch,
data__sparkRBatch,
data__sparkSqlBatch,
data__labels,
data__runtimeConfig,
data__environmentConfig,
projectsId,
locationsId,
batchId,
requestId
)
SELECT 
'{{ pysparkBatch }}',
'{{ sparkBatch }}',
'{{ sparkRBatch }}',
'{{ sparkSqlBatch }}',
'{{ labels }}',
'{{ runtimeConfig }}',
'{{ environmentConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ batchId }}',
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
- name: batches
  props:
    - name: projectsId
      value: string
      description: Required parameter for the batches resource.
    - name: locationsId
      value: string
      description: Required parameter for the batches resource.
    - name: pysparkBatch
      value: object
      description: >
        Optional. PySpark batch config.
        
    - name: sparkBatch
      value: object
      description: >
        Optional. Spark batch config.
        
    - name: sparkRBatch
      value: object
      description: >
        Optional. SparkR batch config.
        
    - name: sparkSqlBatch
      value: object
      description: >
        Optional. SparkSql batch config.
        
    - name: labels
      value: object
      description: >
        Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.
        
    - name: runtimeConfig
      value: object
      description: >
        Optional. Runtime configuration for the batch execution.
        
    - name: environmentConfig
      value: object
      description: >
        Optional. Environment configuration for the batch execution.
        
    - name: batchId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_batches_delete"
    values={[
        { label: 'projects_locations_batches_delete', value: 'projects_locations_batches_delete' }
    ]}
>
<TabItem value="projects_locations_batches_delete">

Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.

```sql
DELETE FROM google.dataproc.batches
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND batchesId = '{{ batchesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_batches_analyze"
    values={[
        { label: 'projects_locations_batches_analyze', value: 'projects_locations_batches_analyze' }
    ]}
>
<TabItem value="projects_locations_batches_analyze">

Analyze a Batch for possible recommendations and insights.

```sql
EXEC google.dataproc.batches.projects_locations_batches_analyze 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@batchesId='{{ batchesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"requestorId": "{{ requestorId }}"
}';
```
</TabItem>
</Tabs>
