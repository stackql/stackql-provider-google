--- 
title: service_connection_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - service_connection_maps
  - networkconnectivity
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

Creates, updates, deletes, gets or lists a <code>service_connection_maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_connection_maps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.service_connection_maps" /></td></tr>
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

The ServiceConnectionMap resource.

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
    <td>Immutable. The name of a ServiceConnectionMap. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/serviceConnectionMaps/&#123;service_connection_map&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="consumerPscConfigs" /></td>
    <td><code>array</code></td>
    <td>The PSC configurations on consumer side.</td>
</tr>
<tr>
    <td><CopyableCode code="consumerPscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. PSC connection details on consumer side.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the ServiceConnectionMap was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>Output only. The infrastructure used for connections between consumers/producers.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="producerPscConfigs" /></td>
    <td><code>array</code></td>
    <td>The PSC configurations on producer side.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceClass" /></td>
    <td><code>string</code></td>
    <td>The service class identifier this ServiceConnectionMap is for. The user of ServiceConnectionMap create API needs to have networkconnecitivty.serviceclasses.use iam permission for the service class.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceClassUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The service class uri this ServiceConnectionMap is for.</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The token provided by the consumer. This token authenticates that the consumer can create a connection within the specified project and network.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the ServiceConnectionMap was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for ListServiceConnectionMaps.

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
    <td>The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceConnectionMaps" /></td>
    <td><code>array</code></td>
    <td>ServiceConnectionMaps to be returned.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceConnectionMapsId"><code>serviceConnectionMapsId</code></a></td>
    <td></td>
    <td>Gets details of a single ServiceConnectionMap.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ServiceConnectionMaps in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-serviceConnectionMapId"><code>serviceConnectionMapId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ServiceConnectionMap in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceConnectionMapsId"><code>serviceConnectionMapsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single ServiceConnectionMap.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceConnectionMapsId"><code>serviceConnectionMapsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single ServiceConnectionMap.</td>
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
<tr id="parameter-serviceConnectionMapsId">
    <td><CopyableCode code="serviceConnectionMapsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-serviceConnectionMapId">
    <td><CopyableCode code="serviceConnectionMapId" /></td>
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

Gets details of a single ServiceConnectionMap.

```sql
SELECT
name,
consumerPscConfigs,
consumerPscConnections,
createTime,
description,
etag,
infrastructure,
labels,
producerPscConfigs,
serviceClass,
serviceClassUri,
token,
updateTime
FROM google.networkconnectivity.service_connection_maps
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND serviceConnectionMapsId = '{{ serviceConnectionMapsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ServiceConnectionMaps in a given project and location.

```sql
SELECT
nextPageToken,
serviceConnectionMaps,
unreachable
FROM google.networkconnectivity.service_connection_maps
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

Creates a new ServiceConnectionMap in a given project and location.

```sql
INSERT INTO google.networkconnectivity.service_connection_maps (
data__name,
data__labels,
data__description,
data__serviceClass,
data__producerPscConfigs,
data__consumerPscConfigs,
data__token,
data__etag,
projectsId,
locationsId,
serviceConnectionMapId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ serviceClass }}',
'{{ producerPscConfigs }}',
'{{ consumerPscConfigs }}',
'{{ token }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ serviceConnectionMapId }}',
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
- name: service_connection_maps
  props:
    - name: projectsId
      value: string
      description: Required parameter for the service_connection_maps resource.
    - name: locationsId
      value: string
      description: Required parameter for the service_connection_maps resource.
    - name: name
      value: string
      description: >
        Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names
        
    - name: labels
      value: object
      description: >
        User-defined labels.
        
    - name: description
      value: string
      description: >
        A description of this resource.
        
    - name: serviceClass
      value: string
      description: >
        The service class identifier this ServiceConnectionMap is for. The user of ServiceConnectionMap create API needs to have networkconnecitivty.serviceclasses.use iam permission for the service class.
        
    - name: producerPscConfigs
      value: array
      description: >
        The PSC configurations on producer side.
        
    - name: consumerPscConfigs
      value: array
      description: >
        The PSC configurations on consumer side.
        
    - name: token
      value: string
      description: >
        The token provided by the consumer. This token authenticates that the consumer can create a connection within the specified project and network.
        
    - name: etag
      value: string
      description: >
        Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: serviceConnectionMapId
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

Updates the parameters of a single ServiceConnectionMap.

```sql
UPDATE google.networkconnectivity.service_connection_maps
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__serviceClass = '{{ serviceClass }}',
data__producerPscConfigs = '{{ producerPscConfigs }}',
data__consumerPscConfigs = '{{ consumerPscConfigs }}',
data__token = '{{ token }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serviceConnectionMapsId = '{{ serviceConnectionMapsId }}' --required
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

Deletes a single ServiceConnectionMap.

```sql
DELETE FROM google.networkconnectivity.service_connection_maps
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serviceConnectionMapsId = '{{ serviceConnectionMapsId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
