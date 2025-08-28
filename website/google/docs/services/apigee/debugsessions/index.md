--- 
title: debugsessions
hide_title: false
hide_table_of_contents: false
keywords:
  - debugsessions
  - apigee
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

Creates, updates, deletes, gets or lists a <code>debugsessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>debugsessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.debugsessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_environments_apis_revisions_debugsessions_get"
    values={[
        { label: 'organizations_environments_apis_revisions_debugsessions_get', value: 'organizations_environments_apis_revisions_debugsessions_get' },
        { label: 'organizations_environments_apis_revisions_debugsessions_list', value: 'organizations_environments_apis_revisions_debugsessions_list' },
        { label: 'organizations_apis_debugsessions_list', value: 'organizations_apis_debugsessions_list' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_debugsessions_get">

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
    <td>A unique ID for this DebugSession.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The first transaction creation timestamp, recorded by UAP.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.</td>
</tr>
<tr>
    <td><CopyableCode code="tracesize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_apis_revisions_debugsessions_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The debug session ID.</td>
</tr>
<tr>
    <td><CopyableCode code="timestampMs" /></td>
    <td><code>string (int64)</code></td>
    <td>The first transaction creation timestamp in millisecond, recorded by UAP.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apis_debugsessions_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The debug session ID.</td>
</tr>
<tr>
    <td><CopyableCode code="apiProxyRevisionId" /></td>
    <td><code>string</code></td>
    <td>The revision ID of the deployed API proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The first transaction creation timestamp in millisecond, recorded by UAP.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The environment ID of the deployed API proxy.</td>
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
    <td><a href="#organizations_environments_apis_revisions_debugsessions_get"><CopyableCode code="organizations_environments_apis_revisions_debugsessions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a>, <a href="#parameter-debugsessionsId"><code>debugsessionsId</code></a></td>
    <td></td>
    <td>Retrieves a debug session.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_revisions_debugsessions_list"><CopyableCode code="organizations_environments_apis_revisions_debugsessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists debug sessions that are currently active in the given API Proxy revision.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_debugsessions_list"><CopyableCode code="organizations_apis_debugsessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists debug sessions that are currently active in the given API Proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_apis_revisions_debugsessions_create"><CopyableCode code="organizations_environments_apis_revisions_debugsessions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-timeout"><code>timeout</code></a></td>
    <td>Creates a debug session for a deployed API Proxy revision.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-debugsessionsId">
    <td><CopyableCode code="debugsessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
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
<tr id="parameter-timeout">
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_environments_apis_revisions_debugsessions_get"
    values={[
        { label: 'organizations_environments_apis_revisions_debugsessions_get', value: 'organizations_environments_apis_revisions_debugsessions_get' },
        { label: 'organizations_environments_apis_revisions_debugsessions_list', value: 'organizations_environments_apis_revisions_debugsessions_list' },
        { label: 'organizations_apis_debugsessions_list', value: 'organizations_apis_debugsessions_list' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_debugsessions_get">

Retrieves a debug session.

```sql
SELECT
name,
count,
createTime,
filter,
timeout,
tracesize,
validity
FROM google.apigee.debugsessions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND debugsessionsId = '{{ debugsessionsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_environments_apis_revisions_debugsessions_list">

Lists debug sessions that are currently active in the given API Proxy revision.

```sql
SELECT
id,
timestampMs
FROM google.apigee.debugsessions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="organizations_apis_debugsessions_list">

Lists debug sessions that are currently active in the given API Proxy.

```sql
SELECT
id,
apiProxyRevisionId,
createTime,
environmentId
FROM google.apigee.debugsessions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_environments_apis_revisions_debugsessions_create"
    values={[
        { label: 'organizations_environments_apis_revisions_debugsessions_create', value: 'organizations_environments_apis_revisions_debugsessions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_environments_apis_revisions_debugsessions_create">

Creates a debug session for a deployed API Proxy revision.

```sql
INSERT INTO google.apigee.debugsessions (
data__name,
data__validity,
data__count,
data__tracesize,
data__filter,
data__timeout,
organizationsId,
environmentsId,
apisId,
revisionsId,
timeout
)
SELECT 
'{{ name }}',
{{ validity }},
{{ count }},
{{ tracesize }},
'{{ filter }}',
'{{ timeout }}',
'{{ organizationsId }}',
'{{ environmentsId }}',
'{{ apisId }}',
'{{ revisionsId }}',
'{{ timeout }}'
RETURNING
name,
count,
createTime,
filter,
timeout,
tracesize,
validity
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: debugsessions
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the debugsessions resource.
    - name: environmentsId
      value: string
      description: Required parameter for the debugsessions resource.
    - name: apisId
      value: string
      description: Required parameter for the debugsessions resource.
    - name: revisionsId
      value: string
      description: Required parameter for the debugsessions resource.
    - name: name
      value: string
      description: >
        A unique ID for this DebugSession.
        
    - name: validity
      value: integer
      description: >
        Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.
        
    - name: count
      value: integer
      description: >
        Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.
        
    - name: tracesize
      value: integer
      description: >
        Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.
        
    - name: filter
      value: string
      description: >
        Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.
        
    - name: timeout
      value: string
      description: >
        Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.
        
    - name: timeout
      value: string (int64)
```
</TabItem>
</Tabs>
