--- 
title: blockchain_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - blockchain_nodes
  - blockchainnodeengine
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

Creates, updates, deletes, gets or lists a <code>blockchain_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>blockchain_nodes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.blockchainnodeengine.blockchain_nodes" /></td></tr>
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
    <td>Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`.</td>
</tr>
<tr>
    <td><CopyableCode code="blockchainType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The blockchain type of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The connection information used to interact with a blockchain node. (id: ConnectionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which the blockchain node was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="ethereumDetails" /></td>
    <td><code>object</code></td>
    <td>Ethereum-specific blockchain node details. (id: EthereumDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-provided key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="privateServiceConnectEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints. Warning: These nodes are deprecated, please use public endpoints instead.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. A status representing the state of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which the blockchain node was last updated.</td>
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
    <td>Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`.</td>
</tr>
<tr>
    <td><CopyableCode code="blockchainType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The blockchain type of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The connection information used to interact with a blockchain node. (id: ConnectionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which the blockchain node was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="ethereumDetails" /></td>
    <td><code>object</code></td>
    <td>Ethereum-specific blockchain node details. (id: EthereumDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-provided key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="privateServiceConnectEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints. Warning: These nodes are deprecated, please use public endpoints instead.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. A status representing the state of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp at which the blockchain node was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-blockchainNodesId"><code>blockchainNodesId</code></a></td>
    <td></td>
    <td>Gets details of a single blockchain node.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists blockchain nodes in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-blockchainNodeId"><code>blockchainNodeId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new blockchain node in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-blockchainNodesId"><code>blockchainNodesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single blockchain node.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-blockchainNodesId"><code>blockchainNodesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single blockchain node.</td>
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
<tr id="parameter-blockchainNodesId">
    <td><CopyableCode code="blockchainNodesId" /></td>
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
<tr id="parameter-blockchainNodeId">
    <td><CopyableCode code="blockchainNodeId" /></td>
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

Gets details of a single blockchain node.

```sql
SELECT
name,
blockchainType,
connectionInfo,
createTime,
ethereumDetails,
labels,
privateServiceConnectEnabled,
state,
updateTime
FROM google.blockchainnodeengine.blockchain_nodes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND blockchainNodesId = '{{ blockchainNodesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists blockchain nodes in a given project and location.

```sql
SELECT
name,
blockchainType,
connectionInfo,
createTime,
ethereumDetails,
labels,
privateServiceConnectEnabled,
state,
updateTime
FROM google.blockchainnodeengine.blockchain_nodes
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

Creates a new blockchain node in a given project and location.

```sql
INSERT INTO google.blockchainnodeengine.blockchain_nodes (
data__ethereumDetails,
data__labels,
data__blockchainType,
data__privateServiceConnectEnabled,
projectsId,
locationsId,
blockchainNodeId,
requestId
)
SELECT 
'{{ ethereumDetails }}',
'{{ labels }}',
'{{ blockchainType }}',
{{ privateServiceConnectEnabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ blockchainNodeId }}',
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
- name: blockchain_nodes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the blockchain_nodes resource.
    - name: locationsId
      value: string
      description: Required parameter for the blockchain_nodes resource.
    - name: ethereumDetails
      value: object
      description: >
        Ethereum-specific blockchain node details.
        
    - name: labels
      value: object
      description: >
        User-provided key-value pairs.
        
    - name: blockchainType
      value: string
      description: >
        Immutable. The blockchain type of the node.
        
      valid_values: ['BLOCKCHAIN_TYPE_UNSPECIFIED', 'ETHEREUM']
    - name: privateServiceConnectEnabled
      value: boolean
      description: >
        Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints. Warning: These nodes are deprecated, please use public endpoints instead.
        
    - name: blockchainNodeId
      value: string
    - name: requestId
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

Updates the parameters of a single blockchain node.

```sql
UPDATE google.blockchainnodeengine.blockchain_nodes
SET 
data__ethereumDetails = '{{ ethereumDetails }}',
data__labels = '{{ labels }}',
data__blockchainType = '{{ blockchainType }}',
data__privateServiceConnectEnabled = {{ privateServiceConnectEnabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND blockchainNodesId = '{{ blockchainNodesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single blockchain node.

```sql
DELETE FROM google.blockchainnodeengine.blockchain_nodes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND blockchainNodesId = '{{ blockchainNodesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
