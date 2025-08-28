--- 
title: trace_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - trace_scopes
  - observability
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

Creates, updates, deletes, gets or lists a <code>trace_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>trace_scopes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.observability.trace_scopes" /></td></tr>
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
    <td>Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the trace scope.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this trace scope. The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceNames" /></td>
    <td><code>array</code></td>
    <td>Required. Names of the projects that are included in this trace scope. * `projects/[PROJECT_ID]` A trace scope can include a maximum of 20 projects.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the trace scope.</td>
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
    <td>Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of the trace scope.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Describes this trace scope. The maximum length of the description is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceNames" /></td>
    <td><code>array</code></td>
    <td>Required. Names of the projects that are included in this trace scope. * `projects/[PROJECT_ID]` A trace scope can include a maximum of 20 projects.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of the trace scope.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-traceScopesId"><code>traceScopesId</code></a></td>
    <td></td>
    <td>Get TraceScope resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List TraceScopes of a project in a particular location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-traceScopeId"><code>traceScopeId</code></a></td>
    <td>Create a new TraceScope.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-traceScopesId"><code>traceScopesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a TraceScope.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-traceScopesId"><code>traceScopesId</code></a></td>
    <td></td>
    <td>Delete a TraceScope.</td>
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
<tr id="parameter-traceScopesId">
    <td><CopyableCode code="traceScopesId" /></td>
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
<tr id="parameter-traceScopeId">
    <td><CopyableCode code="traceScopeId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Get TraceScope resource.

```sql
SELECT
name,
createTime,
description,
resourceNames,
updateTime
FROM google.observability.trace_scopes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND traceScopesId = '{{ traceScopesId }}' -- required;
```
</TabItem>
<TabItem value="list">

List TraceScopes of a project in a particular location.

```sql
SELECT
name,
createTime,
description,
resourceNames,
updateTime
FROM google.observability.trace_scopes
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

Create a new TraceScope.

```sql
INSERT INTO google.observability.trace_scopes (
data__name,
data__resourceNames,
data__description,
projectsId,
locationsId,
traceScopeId
)
SELECT 
'{{ name }}',
'{{ resourceNames }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ traceScopeId }}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: trace_scopes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the trace_scopes resource.
    - name: locationsId
      value: string
      description: Required parameter for the trace_scopes resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope
        
    - name: resourceNames
      value: array
      description: >
        Required. Names of the projects that are included in this trace scope. * `projects/[PROJECT_ID]` A trace scope can include a maximum of 20 projects.
        
    - name: description
      value: string
      description: >
        Optional. Describes this trace scope. The maximum length of the description is 8000 characters.
        
    - name: traceScopeId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Update a TraceScope.

```sql
UPDATE google.observability.trace_scopes
SET 
data__name = '{{ name }}',
data__resourceNames = '{{ resourceNames }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND traceScopesId = '{{ traceScopesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
resourceNames,
updateTime;
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

Delete a TraceScope.

```sql
DELETE FROM google.observability.trace_scopes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND traceScopesId = '{{ traceScopesId }}' --required;
```
</TabItem>
</Tabs>
