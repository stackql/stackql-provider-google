--- 
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
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

Creates, updates, deletes, gets or lists a <code>destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.destinations" /></td></tr>
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
    <td>Identifier. The name of the Destination resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/multicloudDataTransferConfigs/&#123;multicloud_data_transfer_config&#125;/destinations/&#123;destination&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the Destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional field to provide a description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>Required. Unordered list. The list of Endpoints configured for the IP Prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="ipPrefix" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Remote IP Prefix in the remote CSP, where the customer's workload is located</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTimeline" /></td>
    <td><code>object</code></td>
    <td>The timeline of pending states for a resource. (id: StateTimeline)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the destination. This value is unique across all destination resources. If a destination is deleted and another with the same name is created, the new destination is assigned a different uid.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the Destination was updated.</td>
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
    <td>Identifier. The name of the Destination resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/multicloudDataTransferConfigs/&#123;multicloud_data_transfer_config&#125;/destinations/&#123;destination&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the Destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional field to provide a description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>Required. Unordered list. The list of Endpoints configured for the IP Prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="ipPrefix" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Remote IP Prefix in the remote CSP, where the customer's workload is located</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTimeline" /></td>
    <td><code>object</code></td>
    <td>The timeline of pending states for a resource. (id: StateTimeline)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the destination. This value is unique across all destination resources. If a destination is deleted and another with the same name is created, the new destination is assigned a different uid.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the Destination was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a>, <a href="#parameter-destinationsId"><code>destinationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Destination.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists Destinations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a></td>
    <td><a href="#parameter-destinationId"><code>destinationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Destination in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a>, <a href="#parameter-destinationsId"><code>destinationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a Destination in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a>, <a href="#parameter-destinationsId"><code>destinationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single Destination.</td>
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
<tr id="parameter-destinationsId">
    <td><CopyableCode code="destinationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-multicloudDataTransferConfigsId">
    <td><CopyableCode code="multicloudDataTransferConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-destinationId">
    <td><CopyableCode code="destinationId" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single Destination.

```sql
SELECT
name,
createTime,
description,
endpoints,
etag,
ipPrefix,
labels,
stateTimeline,
uid,
updateTime
FROM google.networkconnectivity.destinations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' -- required
AND destinationsId = '{{ destinationsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists Destinations in a given project and location.

```sql
SELECT
name,
createTime,
description,
endpoints,
etag,
ipPrefix,
labels,
stateTimeline,
uid,
updateTime
FROM google.networkconnectivity.destinations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}';
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

Creates a Destination in a given project and location.

```sql
INSERT INTO google.networkconnectivity.destinations (
data__name,
data__labels,
data__etag,
data__description,
data__ipPrefix,
data__endpoints,
projectsId,
locationsId,
multicloudDataTransferConfigsId,
destinationId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ etag }}',
'{{ description }}',
'{{ ipPrefix }}',
'{{ endpoints }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ multicloudDataTransferConfigsId }}',
'{{ destinationId }}',
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
- name: destinations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the destinations resource.
    - name: locationsId
      value: string
      description: Required parameter for the destinations resource.
    - name: multicloudDataTransferConfigsId
      value: string
      description: Required parameter for the destinations resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the Destination resource. Format: `projects/{project}/locations/{location}/multicloudDataTransferConfigs/{multicloud_data_transfer_config}/destinations/{destination}`.
        
    - name: labels
      value: object
      description: >
        Optional. User-defined labels.
        
    - name: etag
      value: string
      description: >
        The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: description
      value: string
      description: >
        Optional. An optional field to provide a description of this resource.
        
    - name: ipPrefix
      value: string
      description: >
        Required. Immutable. Remote IP Prefix in the remote CSP, where the customer's workload is located
        
    - name: endpoints
      value: array
      description: >
        Required. Unordered list. The list of Endpoints configured for the IP Prefix.
        
    - name: destinationId
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

Updates a Destination in a given project and location.

```sql
UPDATE google.networkconnectivity.destinations
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__description = '{{ description }}',
data__ipPrefix = '{{ ipPrefix }}',
data__endpoints = '{{ endpoints }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' --required
AND destinationsId = '{{ destinationsId }}' --required
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

Deletes a single Destination.

```sql
DELETE FROM google.networkconnectivity.destinations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' --required
AND destinationsId = '{{ destinationsId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
