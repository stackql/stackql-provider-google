--- 
title: workflow_invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_invocations
  - dataform
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

Creates, updates, deletes, gets or lists a <code>workflow_invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workflow_invocations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.workflow_invocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query', value: 'query' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Represents a single invocation of a compilation result.

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
    <td>Output only. The workflow invocation's name.</td>
</tr>
<tr>
    <td><CopyableCode code="compilationResult" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. Only set if the repository has a KMS Key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="invocationConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. If left unset, a default InvocationConfig will be used. (id: InvocationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="invocationTiming" /></td>
    <td><code>object</code></td>
    <td>Output only. This workflow invocation's timing details. (id: Interval)</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedCompilationResult" /></td>
    <td><code>string</code></td>
    <td>Output only. The resolved compilation result that was used to create this invocation. Will be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. This workflow invocation's current state.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowConfig" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the workflow config to invoke. Must be in the format `projects/*/locations/*/repositories/*/workflowConfigs/*`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query">

`QueryWorkflowInvocationActions` response message.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowInvocationActions" /></td>
    <td><code>array</code></td>
    <td>List of workflow invocation actions.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

`ListWorkflowInvocations` response message.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations which could not be reached.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowInvocations" /></td>
    <td><code>array</code></td>
    <td>List of workflow invocations.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowInvocationsId"><code>workflowInvocationsId</code></a></td>
    <td></td>
    <td>Fetches a single WorkflowInvocation.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowInvocationsId"><code>workflowInvocationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns WorkflowInvocationActions in a given WorkflowInvocation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists WorkflowInvocations in a given Repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Creates a new WorkflowInvocation in a given Repository.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowInvocationsId"><code>workflowInvocationsId</code></a></td>
    <td></td>
    <td>Deletes a single WorkflowInvocation.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a>, <a href="#parameter-workflowInvocationsId"><code>workflowInvocationsId</code></a></td>
    <td></td>
    <td>Requests cancellation of a running WorkflowInvocation.</td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workflowInvocationsId">
    <td><CopyableCode code="workflowInvocationsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query', value: 'query' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Fetches a single WorkflowInvocation.

```sql
SELECT
name,
compilationResult,
dataEncryptionState,
internalMetadata,
invocationConfig,
invocationTiming,
resolvedCompilationResult,
state,
workflowConfig
FROM google.dataform.workflow_invocations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workflowInvocationsId = '{{ workflowInvocationsId }}' -- required;
```
</TabItem>
<TabItem value="query">

Returns WorkflowInvocationActions in a given WorkflowInvocation.

```sql
SELECT
nextPageToken,
workflowInvocationActions
FROM google.dataform.workflow_invocations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND workflowInvocationsId = '{{ workflowInvocationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="list">

Lists WorkflowInvocations in a given Repository.

```sql
SELECT
nextPageToken,
unreachable,
workflowInvocations
FROM google.dataform.workflow_invocations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}';
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

Creates a new WorkflowInvocation in a given Repository.

```sql
INSERT INTO google.dataform.workflow_invocations (
data__compilationResult,
data__workflowConfig,
data__invocationConfig,
projectsId,
locationsId,
repositoriesId
)
SELECT 
'{{ compilationResult }}',
'{{ workflowConfig }}',
'{{ invocationConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoriesId }}'
RETURNING
name,
compilationResult,
dataEncryptionState,
internalMetadata,
invocationConfig,
invocationTiming,
resolvedCompilationResult,
state,
workflowConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: workflow_invocations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workflow_invocations resource.
    - name: locationsId
      value: string
      description: Required parameter for the workflow_invocations resource.
    - name: repositoriesId
      value: string
      description: Required parameter for the workflow_invocations resource.
    - name: compilationResult
      value: string
      description: >
        Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.
        
    - name: workflowConfig
      value: string
      description: >
        Immutable. The name of the workflow config to invoke. Must be in the format `projects/*/locations/*/repositories/*/workflowConfigs/*`.
        
    - name: invocationConfig
      value: object
      description: >
        Immutable. If left unset, a default InvocationConfig will be used.
        
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

Deletes a single WorkflowInvocation.

```sql
DELETE FROM google.dataform.workflow_invocations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND workflowInvocationsId = '{{ workflowInvocationsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Requests cancellation of a running WorkflowInvocation.

```sql
EXEC google.dataform.workflow_invocations.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@workflowInvocationsId='{{ workflowInvocationsId }}' --required;
```
</TabItem>
</Tabs>
