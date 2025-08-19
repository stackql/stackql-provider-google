--- 
title: reasoning_engines
hide_title: false
hide_table_of_contents: false
keywords:
  - reasoning_engines
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>reasoning_engines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>reasoning_engines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.reasoning_engines" /></td></tr>
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

ReasoningEngine provides a customizable runtime for models to determine which actions to take and in which order.

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
    <td>Identifier. The resource name of the ReasoningEngine. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ReasoningEngine was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a ReasoningEngine. If set, this ReasoningEngine and all sub-resources of this ReasoningEngine will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations of the ReasoningEngine (id: GoogleCloudAiplatformV1ReasoningEngineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ReasoningEngine was most recently updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ReasoningEngineService.ListReasoningEngines

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
    <td>A token to retrieve the next page of results. Pass to ListReasoningEnginesRequest.page_token to obtain that page.</td>
</tr>
<tr>
    <td><CopyableCode code="reasoningEngines" /></td>
    <td><code>array</code></td>
    <td>List of ReasoningEngines in the requested page.</td>
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
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Gets a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists reasoning engines in a location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Creates a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Queries using a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#stream_query"><CopyableCode code="stream_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Streams queries using a reasoning engine.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
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

Gets a reasoning engine.

```sql
SELECT
name,
createTime,
description,
displayName,
encryptionSpec,
etag,
spec,
updateTime
FROM google.aiplatform.reasoning_engines
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists reasoning engines in a location.

```sql
SELECT
nextPageToken,
reasoningEngines
FROM google.aiplatform.reasoning_engines
WHERE parent = '{{ parent }}'
AND filter = '{{ filter }}'
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

Creates a reasoning engine.

```sql
INSERT INTO google.aiplatform.reasoning_engines (
data__name,
data__displayName,
data__description,
data__spec,
data__etag,
data__encryptionSpec,
parent
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ spec }}',
'{{ etag }}',
'{{ encryptionSpec }}',
'{{ parent }}'
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
- name: reasoning_engines
  props:
    - name: name
      value: string
      description: >
        Identifier. The resource name of the ReasoningEngine. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the ReasoningEngine.
        
    - name: description
      value: string
      description: >
        Optional. The description of the ReasoningEngine.
        
    - name: spec
      value: object
      description: >
        Optional. Configurations of the ReasoningEngine
        
    - name: etag
      value: string
      description: >
        Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
        
    - name: encryptionSpec
      value: object
      description: >
        Customer-managed encryption key spec for a ReasoningEngine. If set, this ReasoningEngine and all sub-resources of this ReasoningEngine will be secured by this key.
        
    - name: parent
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

Updates a reasoning engine.

```sql
UPDATE google.aiplatform.reasoning_engines
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__spec = '{{ spec }}',
data__etag = '{{ etag }}',
data__encryptionSpec = '{{ encryptionSpec }}'
WHERE 
reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a reasoning engine.

```sql
DELETE FROM google.aiplatform.reasoning_engines
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND force = '{{ force }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query"
    values={[
        { label: 'query', value: 'query' },
        { label: 'stream_query', value: 'stream_query' }
    ]}
>
<TabItem value="query">

Queries using a reasoning engine.

```sql
EXEC google.aiplatform.reasoning_engines.query 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"input": "{{ input }}", 
"classMethod": "{{ classMethod }}"
}';
```
</TabItem>
<TabItem value="stream_query">

Streams queries using a reasoning engine.

```sql
EXEC google.aiplatform.reasoning_engines.stream_query 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"input": "{{ input }}", 
"classMethod": "{{ classMethod }}"
}';
```
</TabItem>
</Tabs>
