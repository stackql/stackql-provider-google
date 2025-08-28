--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
  - connectors
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.connectors.actions" /></td></tr>
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
    <td>Name of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Brief Description of action</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name of action to be shown on client side</td>
</tr>
<tr>
    <td><CopyableCode code="inputJsonSchema" /></td>
    <td><code>object</code></td>
    <td>JsonSchema representation of this actions's input schema (id: JsonSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="inputParameters" /></td>
    <td><code>array</code></td>
    <td>List containing input parameter metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata like service latency, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="resultJsonSchema" /></td>
    <td><code>object</code></td>
    <td>JsonSchema representation of this actions's result schema (id: JsonSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="resultMetadata" /></td>
    <td><code>array</code></td>
    <td>List containing the metadata of result fields.</td>
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
    <td>Name of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Brief Description of action</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display Name of action to be shown on client side</td>
</tr>
<tr>
    <td><CopyableCode code="inputJsonSchema" /></td>
    <td><code>object</code></td>
    <td>JsonSchema representation of this actions's input schema (id: JsonSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="inputParameters" /></td>
    <td><code>array</code></td>
    <td>List containing input parameter metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata like service latency, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="resultJsonSchema" /></td>
    <td><code>object</code></td>
    <td>JsonSchema representation of this actions's result schema (id: JsonSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="resultMetadata" /></td>
    <td><code>array</code></td>
    <td>List containing the metadata of result fields.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-actionsId"><code>actionsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the schema of the given action.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the schema of all the actions supported by the connector.</td>
</tr>
<tr>
    <td><a href="#execute"><CopyableCode code="execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-actionsId"><code>actionsId</code></a></td>
    <td></td>
    <td>Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.</td>
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
<tr id="parameter-actionsId">
    <td><CopyableCode code="actionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets the schema of the given action.

```sql
SELECT
name,
description,
displayName,
inputJsonSchema,
inputParameters,
metadata,
resultJsonSchema,
resultMetadata
FROM google.connectors.actions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND actionsId = '{{ actionsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Gets the schema of all the actions supported by the connector.

```sql
SELECT
name,
description,
displayName,
inputJsonSchema,
inputParameters,
metadata,
resultJsonSchema,
resultMetadata
FROM google.connectors.actions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute"
    values={[
        { label: 'execute', value: 'execute' }
    ]}
>
<TabItem value="execute">

Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.

```sql
EXEC google.connectors.actions.execute 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@actionsId='{{ actionsId }}' --required 
@@json=
'{
"parameters": "{{ parameters }}"
}';
```
</TabItem>
</Tabs>
