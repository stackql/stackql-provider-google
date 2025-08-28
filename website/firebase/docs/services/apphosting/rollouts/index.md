--- 
title: rollouts
hide_title: false
hide_table_of_contents: false
keywords:
  - rollouts
  - apphosting
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>rollouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rollouts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.apphosting.rollouts" /></td></tr>
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
    <td>Identifier. The resource name of the rollout. Format: `projects/&#123;project&#125;/locations/&#123;locationId&#125;/backends/&#123;backendId&#125;/rollouts/&#123;rolloutId&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of a build that already exists. It doesn't have to be built; a rollout will wait for a build to be ready before updating traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the rollout was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the rollout was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name. 63 character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. A status and (human readable) error message for the rollout, if in a `FAILED` state. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that can be used to organize and categorize objects.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. A field that, if true, indicates that the Rollout currently has an LRO.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the rollout.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned, unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the rollout was last updated.</td>
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
    <td>Identifier. The resource name of the rollout. Format: `projects/&#123;project&#125;/locations/&#123;locationId&#125;/backends/&#123;backendId&#125;/rollouts/&#123;rolloutId&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of a build that already exists. It doesn't have to be built; a rollout will wait for a build to be ready before updating traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the rollout was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the rollout was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name. 63 character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. A status and (human readable) error message for the rollout, if in a `FAILED` state. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that can be used to organize and categorize objects.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. A field that, if true, indicates that the Rollout currently has an LRO.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the rollout.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned, unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the rollout was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Gets information about a rollout.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists rollouts for a backend.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a></td>
    <td><a href="#parameter-rolloutId"><code>rolloutId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new rollout for a backend.</td>
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
<tr id="parameter-backendsId">
    <td><CopyableCode code="backendsId" /></td>
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
<tr id="parameter-rolloutsId">
    <td><CopyableCode code="rolloutsId" /></td>
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
<tr id="parameter-rolloutId">
    <td><CopyableCode code="rolloutId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
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

Gets information about a rollout.

```sql
SELECT
name,
annotations,
build,
createTime,
deleteTime,
displayName,
error,
etag,
labels,
reconciling,
state,
uid,
updateTime
FROM firebase.apphosting.rollouts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backendsId = '{{ backendsId }}' -- required
AND rolloutsId = '{{ rolloutsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists rollouts for a backend.

```sql
SELECT
name,
annotations,
build,
createTime,
deleteTime,
displayName,
error,
etag,
labels,
reconciling,
state,
uid,
updateTime
FROM firebase.apphosting.rollouts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backendsId = '{{ backendsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND showDeleted = '{{ showDeleted }}';
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

Creates a new rollout for a backend.

```sql
INSERT INTO firebase.apphosting.rollouts (
data__name,
data__displayName,
data__build,
data__labels,
data__annotations,
projectsId,
locationsId,
backendsId,
rolloutId,
requestId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ build }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backendsId }}',
'{{ rolloutId }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
- name: rollouts
  props:
    - name: projectsId
      value: string
      description: Required parameter for the rollouts resource.
    - name: locationsId
      value: string
      description: Required parameter for the rollouts resource.
    - name: backendsId
      value: string
      description: Required parameter for the rollouts resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the rollout. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/rollouts/{rolloutId}`.
        
    - name: displayName
      value: string
      description: >
        Optional. Human-readable name. 63 character limit.
        
    - name: build
      value: string
      description: >
        Immutable. The name of a build that already exists. It doesn't have to be built; a rollout will wait for a build to be ready before updating traffic.
        
    - name: labels
      value: object
      description: >
        Optional. Unstructured key value map that can be used to organize and categorize objects.
        
    - name: annotations
      value: object
      description: >
        Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
        
    - name: rolloutId
      value: string
    - name: requestId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>
