--- 
title: agent_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_pools
  - storagetransfer
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

Creates, updates, deletes, gets or lists an <code>agent_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>agent_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storagetransfer.agent_pools" /></td></tr>
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
    <td>Required. Specifies a unique string that identifies the agent pool. Format: `projects/&#123;project_id&#125;/agentPools/&#123;agent_pool_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidthLimit" /></td>
    <td><code>object</code></td>
    <td>Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'. (id: BandwidthLimit)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Specifies the client-specified AgentPool description.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the state of the AgentPool.</td>
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
    <td>Required. Specifies a unique string that identifies the agent pool. Format: `projects/&#123;project_id&#125;/agentPools/&#123;agent_pool_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidthLimit" /></td>
    <td><code>object</code></td>
    <td>Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'. (id: BandwidthLimit)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Specifies the client-specified AgentPool description.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the state of the AgentPool.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-agentPoolsId"><code>agentPoolsId</code></a></td>
    <td></td>
    <td>Gets an agent pool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists agent pools.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-agentPoolId"><code>agentPoolId</code></a></td>
    <td>Creates an agent pool resource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-agentPoolsId"><code>agentPoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing agent pool resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-agentPoolsId"><code>agentPoolsId</code></a></td>
    <td></td>
    <td>Deletes an agent pool.</td>
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
<tr id="parameter-agentPoolsId">
    <td><CopyableCode code="agentPoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-agentPoolId">
    <td><CopyableCode code="agentPoolId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets an agent pool.

```sql
SELECT
name,
bandwidthLimit,
displayName,
state
FROM google.storagetransfer.agent_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND agentPoolsId = '{{ agentPoolsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists agent pools.

```sql
SELECT
name,
bandwidthLimit,
displayName,
state
FROM google.storagetransfer.agent_pools
WHERE projectsId = '{{ projectsId }}' -- required
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

Creates an agent pool resource.

```sql
INSERT INTO google.storagetransfer.agent_pools (
data__name,
data__displayName,
data__bandwidthLimit,
projectsId,
agentPoolId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ bandwidthLimit }}',
'{{ projectsId }}',
'{{ agentPoolId }}'
RETURNING
name,
bandwidthLimit,
displayName,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: agent_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the agent_pools resource.
    - name: name
      value: string
      description: >
        Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`
        
    - name: displayName
      value: string
      description: >
        Specifies the client-specified AgentPool description.
        
    - name: bandwidthLimit
      value: object
      description: >
        Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
        
    - name: agentPoolId
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

Updates an existing agent pool resource.

```sql
UPDATE google.storagetransfer.agent_pools
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__bandwidthLimit = '{{ bandwidthLimit }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND agentPoolsId = '{{ agentPoolsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bandwidthLimit,
displayName,
state;
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

Deletes an agent pool.

```sql
DELETE FROM google.storagetransfer.agent_pools
WHERE projectsId = '{{ projectsId }}' --required
AND agentPoolsId = '{{ agentPoolsId }}' --required;
```
</TabItem>
</Tabs>
