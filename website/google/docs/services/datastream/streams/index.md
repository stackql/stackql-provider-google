--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - datastream
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datastream.streams" /></td></tr>
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
    <td>Output only. Identifier. The stream's name.</td>
</tr>
<tr>
    <td><CopyableCode code="backfillAll" /></td>
    <td><code>object</code></td>
    <td>Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. (id: BackfillAllStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="backfillNone" /></td>
    <td><code>object</code></td>
    <td>Do not automatically backfill any objects. (id: BackfillNoneStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryptionKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Destination connection profile configuration. (id: DestinationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors on the Stream.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRecoveryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Source connection profile configuration. (id: SourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of the stream.</td>
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
    <td>Output only. Identifier. The stream's name.</td>
</tr>
<tr>
    <td><CopyableCode code="backfillAll" /></td>
    <td><code>object</code></td>
    <td>Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. (id: BackfillAllStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="backfillNone" /></td>
    <td><code>object</code></td>
    <td>Do not automatically backfill any objects. (id: BackfillNoneStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryptionKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Destination connection profile configuration. (id: DestinationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors on the Stream.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRecoveryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Source connection profile configuration. (id: SourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of the stream.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td></td>
    <td>Use this method to get details about a stream.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Use this method to list streams in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Use this method to create a stream.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Use this method to update the configuration of a stream.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Use this method to delete a stream.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td></td>
    <td>Use this method to start, resume or recover a stream with a non default CDC strategy.</td>
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
<tr id="parameter-streamsId">
    <td><CopyableCode code="streamsId" /></td>
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
<tr id="parameter-streamId">
    <td><CopyableCode code="streamId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Use this method to get details about a stream.

```sql
SELECT
name,
backfillAll,
backfillNone,
createTime,
customerManagedEncryptionKey,
destinationConfig,
displayName,
errors,
labels,
lastRecoveryTime,
satisfiesPzi,
satisfiesPzs,
sourceConfig,
state,
updateTime
FROM google.datastream.streams
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND streamsId = '{{ streamsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Use this method to list streams in a project and location.

```sql
SELECT
name,
backfillAll,
backfillNone,
createTime,
customerManagedEncryptionKey,
destinationConfig,
displayName,
errors,
labels,
lastRecoveryTime,
satisfiesPzi,
satisfiesPzs,
sourceConfig,
state,
updateTime
FROM google.datastream.streams
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Use this method to create a stream.

```sql
INSERT INTO google.datastream.streams (
data__labels,
data__displayName,
data__sourceConfig,
data__destinationConfig,
data__state,
data__backfillAll,
data__backfillNone,
data__customerManagedEncryptionKey,
projectsId,
locationsId,
streamId,
requestId,
validateOnly,
force
)
SELECT 
'{{ labels }}',
'{{ displayName }}',
'{{ sourceConfig }}',
'{{ destinationConfig }}',
'{{ state }}',
'{{ backfillAll }}',
'{{ backfillNone }}',
'{{ customerManagedEncryptionKey }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ streamId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ force }}'
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
- name: streams
  props:
    - name: projectsId
      value: string
      description: Required parameter for the streams resource.
    - name: locationsId
      value: string
      description: Required parameter for the streams resource.
    - name: labels
      value: object
      description: >
        Labels.
        
    - name: displayName
      value: string
      description: >
        Required. Display name.
        
    - name: sourceConfig
      value: object
      description: >
        Required. Source connection profile configuration.
        
    - name: destinationConfig
      value: object
      description: >
        Required. Destination connection profile configuration.
        
    - name: state
      value: string
      description: >
        The state of the stream.
        
      valid_values: ['STATE_UNSPECIFIED', 'NOT_STARTED', 'RUNNING', 'PAUSED', 'MAINTENANCE', 'FAILED', 'FAILED_PERMANENTLY', 'STARTING', 'DRAINING']
    - name: backfillAll
      value: object
      description: >
        Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.
        
    - name: backfillNone
      value: object
      description: >
        Do not automatically backfill any objects.
        
    - name: customerManagedEncryptionKey
      value: string
      description: >
        Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
        
    - name: streamId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
    - name: force
      value: boolean
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

Use this method to update the configuration of a stream.

```sql
UPDATE google.datastream.streams
SET 
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__sourceConfig = '{{ sourceConfig }}',
data__destinationConfig = '{{ destinationConfig }}',
data__state = '{{ state }}',
data__backfillAll = '{{ backfillAll }}',
data__backfillNone = '{{ backfillNone }}',
data__customerManagedEncryptionKey = '{{ customerManagedEncryptionKey }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND streamsId = '{{ streamsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
AND force = {{ force}}
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

Use this method to delete a stream.

```sql
DELETE FROM google.datastream.streams
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND streamsId = '{{ streamsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="run"
    values={[
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="run">

Use this method to start, resume or recover a stream with a non default CDC strategy.

```sql
EXEC google.datastream.streams.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@streamsId='{{ streamsId }}' --required 
@@json=
'{
"cdcStrategy": "{{ cdcStrategy }}", 
"force": {{ force }}
}';
```
</TabItem>
</Tabs>
