--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - managedkafka
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.connectors" /></td></tr>
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
    <td>Identifier. The name of the connector. Structured like: projects/&#123;project&#125;/locations/&#123;location&#125;/connectClusters/&#123;connect_cluster&#125;/connectors/&#123;connector&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="configs" /></td>
    <td><code>object</code></td>
    <td>Optional. Connector config as keys/values. The keys of the map are connector property names, for example: `connector.class`, `tasks.max`, `key.converter`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="taskRestartPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Restarts the individual tasks of a Connector. (id: TaskRetryPolicy)</td>
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
    <td>Identifier. The name of the connector. Structured like: projects/&#123;project&#125;/locations/&#123;location&#125;/connectClusters/&#123;connect_cluster&#125;/connectors/&#123;connector&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="configs" /></td>
    <td><code>object</code></td>
    <td>Optional. Connector config as keys/values. The keys of the map are connector property names, for example: `connector.class`, `tasks.max`, `key.converter`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="taskRestartPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Restarts the individual tasks of a Connector. (id: TaskRetryPolicy)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Returns the properties of a single connector.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the connectors in a given Connect cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a></td>
    <td><a href="#parameter-connectorId"><code>connectorId</code></a></td>
    <td>Creates a new connector in a given Connect cluster.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the properties of a connector.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Deletes a connector.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Pauses the connector and its tasks.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Resumes the connector and its tasks.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Restarts the connector.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Stops the connector.</td>
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
<tr id="parameter-connectClustersId">
    <td><CopyableCode code="connectClustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-connectorsId">
    <td><CopyableCode code="connectorsId" /></td>
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
<tr id="parameter-connectorId">
    <td><CopyableCode code="connectorId" /></td>
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

Returns the properties of a single connector.

```sql
SELECT
name,
configs,
state,
taskRestartPolicy
FROM google.managedkafka.connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectClustersId = '{{ connectClustersId }}' -- required
AND connectorsId = '{{ connectorsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the connectors in a given Connect cluster.

```sql
SELECT
name,
configs,
state,
taskRestartPolicy
FROM google.managedkafka.connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectClustersId = '{{ connectClustersId }}' -- required
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

Creates a new connector in a given Connect cluster.

```sql
INSERT INTO google.managedkafka.connectors (
data__taskRestartPolicy,
data__name,
data__configs,
projectsId,
locationsId,
connectClustersId,
connectorId
)
SELECT 
'{{ taskRestartPolicy }}',
'{{ name }}',
'{{ configs }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectClustersId }}',
'{{ connectorId }}'
RETURNING
name,
configs,
state,
taskRestartPolicy
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: connectors
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connectors resource.
    - name: locationsId
      value: string
      description: Required parameter for the connectors resource.
    - name: connectClustersId
      value: string
      description: Required parameter for the connectors resource.
    - name: taskRestartPolicy
      value: object
      description: >
        Optional. Restarts the individual tasks of a Connector.
        
    - name: name
      value: string
      description: >
        Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector}
        
    - name: configs
      value: object
      description: >
        Optional. Connector config as keys/values. The keys of the map are connector property names, for example: `connector.class`, `tasks.max`, `key.converter`.
        
    - name: connectorId
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

Updates the properties of a connector.

```sql
UPDATE google.managedkafka.connectors
SET 
data__taskRestartPolicy = '{{ taskRestartPolicy }}',
data__name = '{{ name }}',
data__configs = '{{ configs }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectClustersId = '{{ connectClustersId }}' --required
AND connectorsId = '{{ connectorsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
configs,
state,
taskRestartPolicy;
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

Deletes a connector.

```sql
DELETE FROM google.managedkafka.connectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectClustersId = '{{ connectClustersId }}' --required
AND connectorsId = '{{ connectorsId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pause"
    values={[
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' },
        { label: 'restart', value: 'restart' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="pause">

Pauses the connector and its tasks.

```sql
EXEC google.managedkafka.connectors.pause 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectClustersId='{{ connectClustersId }}' --required, 
@connectorsId='{{ connectorsId }}' --required;
```
</TabItem>
<TabItem value="resume">

Resumes the connector and its tasks.

```sql
EXEC google.managedkafka.connectors.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectClustersId='{{ connectClustersId }}' --required, 
@connectorsId='{{ connectorsId }}' --required;
```
</TabItem>
<TabItem value="restart">

Restarts the connector.

```sql
EXEC google.managedkafka.connectors.restart 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectClustersId='{{ connectClustersId }}' --required, 
@connectorsId='{{ connectorsId }}' --required;
```
</TabItem>
<TabItem value="stop">

Stops the connector.

```sql
EXEC google.managedkafka.connectors.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectClustersId='{{ connectClustersId }}' --required, 
@connectorsId='{{ connectorsId }}' --required;
```
</TabItem>
</Tabs>
