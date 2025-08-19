--- 
title: connect_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_clusters
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

Creates, updates, deletes, gets or lists a <code>connect_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>connect_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.connect_clusters" /></td></tr>
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

An Apache Kafka Connect cluster deployed in a location.

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
    <td>Identifier. The name of the Kafka Connect cluster. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/connectClusters/&#123;connect_cluster_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="capacityConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Capacity configuration for the Kafka Connect cluster. (id: CapacityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations for the worker that are overridden from the defaults. The key of the map is a Kafka Connect worker property name, for example: `exactly.once.source.support`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration properties for a Kafka Connect cluster deployed to Google Cloud Platform. (id: ConnectGcpConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kafkaCluster" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the cluster was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for ListConnectClusters.

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
    <td><CopyableCode code="connectClusters" /></td>
    <td><code>array</code></td>
    <td>The list of Connect clusters in the requested parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that could not be reached.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a></td>
    <td></td>
    <td>Returns the properties of a single Kafka Connect cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the Kafka Connect clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectClusterId"><code>connectClusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Kafka Connect cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the properties of a single Kafka Connect cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectClustersId"><code>connectClustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Connect cluster.</td>
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
<tr id="parameter-connectClusterId">
    <td><CopyableCode code="connectClusterId" /></td>
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

Returns the properties of a single Kafka Connect cluster.

```sql
SELECT
name,
capacityConfig,
config,
createTime,
gcpConfig,
kafkaCluster,
labels,
satisfiesPzi,
satisfiesPzs,
state,
updateTime
FROM google.managedkafka.connect_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectClustersId = '{{ connectClustersId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists the Kafka Connect clusters in a given project and location.

```sql
SELECT
connectClusters,
nextPageToken,
unreachable
FROM google.managedkafka.connect_clusters
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

Creates a new Kafka Connect cluster in a given project and location.

```sql
INSERT INTO google.managedkafka.connect_clusters (
data__gcpConfig,
data__name,
data__kafkaCluster,
data__labels,
data__capacityConfig,
data__config,
projectsId,
locationsId,
connectClusterId,
requestId
)
SELECT 
'{{ gcpConfig }}',
'{{ name }}',
'{{ kafkaCluster }}',
'{{ labels }}',
'{{ capacityConfig }}',
'{{ config }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectClusterId }}',
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
- name: connect_clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the connect_clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the connect_clusters resource.
    - name: gcpConfig
      value: object
      description: >
        Required. Configuration properties for a Kafka Connect cluster deployed to Google Cloud Platform.
        
    - name: name
      value: string
      description: >
        Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id}
        
    - name: kafkaCluster
      value: string
      description: >
        Required. Immutable. The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: projects/{project}/locations/{location}/clusters/{cluster}
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs.
        
    - name: capacityConfig
      value: object
      description: >
        Required. Capacity configuration for the Kafka Connect cluster.
        
    - name: config
      value: object
      description: >
        Optional. Configurations for the worker that are overridden from the defaults. The key of the map is a Kafka Connect worker property name, for example: `exactly.once.source.support`.
        
    - name: connectClusterId
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

Updates the properties of a single Kafka Connect cluster.

```sql
UPDATE google.managedkafka.connect_clusters
SET 
data__gcpConfig = '{{ gcpConfig }}',
data__name = '{{ name }}',
data__kafkaCluster = '{{ kafkaCluster }}',
data__labels = '{{ labels }}',
data__capacityConfig = '{{ capacityConfig }}',
data__config = '{{ config }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectClustersId = '{{ connectClustersId }}' --required
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

Deletes a single Connect cluster.

```sql
DELETE FROM google.managedkafka.connect_clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectClustersId = '{{ connectClustersId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
