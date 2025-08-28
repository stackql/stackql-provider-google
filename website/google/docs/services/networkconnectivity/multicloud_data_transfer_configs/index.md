--- 
title: multicloud_data_transfer_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - multicloud_data_transfer_configs
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

Creates, updates, deletes, gets or lists a <code>multicloud_data_transfer_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>multicloud_data_transfer_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.multicloud_data_transfer_configs" /></td></tr>
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
    <td>Identifier. The name of the MulticloudDataTransferConfig resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/multicloudDataTransferConfigs/&#123;multicloud_data_transfer_config&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the MulticloudDataTransferConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional field to provide a description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationsActiveCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of Destinations in use under the MulticloudDataTransferConfig resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of Destinations configured under the MulticloudDataTransferConfig resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>object</code></td>
    <td>Optional. This map services to either their current or planned states. Service names are keys, and the associated values describe the service's state. If a state change is expected, the value will be the list of ADDING or DELETING states depending on the actions taken. Example: "services": &#123; "big-query": &#123; "states": [ &#123; "state": "ADDING", "effective_time": "2024-12-12T08:00:00Z" &#125;, ] &#125;, "cloud-storage": &#123; "states": [ &#123; "state": "ACTIVE", &#125; ] &#125; &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the MulticloudDataTransferConfig. This value is unique across all MulticloudDataTransferConfig resources. If a MulticloudDataTransferConfig is deleted and another with the same name is created, the new MulticloudDataTransferConfig is assigned a different uid.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the MulticloudDataTransferConfig was updated.</td>
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
    <td>Identifier. The name of the MulticloudDataTransferConfig resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/multicloudDataTransferConfigs/&#123;multicloud_data_transfer_config&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the MulticloudDataTransferConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional field to provide a description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationsActiveCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of Destinations in use under the MulticloudDataTransferConfig resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of Destinations configured under the MulticloudDataTransferConfig resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>object</code></td>
    <td>Optional. This map services to either their current or planned states. Service names are keys, and the associated values describe the service's state. If a state change is expected, the value will be the list of ADDING or DELETING states depending on the actions taken. Example: "services": &#123; "big-query": &#123; "states": [ &#123; "state": "ADDING", "effective_time": "2024-12-12T08:00:00Z" &#125;, ] &#125;, "cloud-storage": &#123; "states": [ &#123; "state": "ACTIVE", &#125; ] &#125; &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the MulticloudDataTransferConfig. This value is unique across all MulticloudDataTransferConfig resources. If a MulticloudDataTransferConfig is deleted and another with the same name is created, the new MulticloudDataTransferConfig is assigned a different uid.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the MulticloudDataTransferConfig was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a></td>
    <td></td>
    <td>Gets details of a single MulticloudDataTransferConfig.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists MulticloudDataTransferConfigs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-multicloudDataTransferConfigId"><code>multicloudDataTransferConfigId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a MulticloudDataTransferConfig in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a MulticloudDataTransferConfig in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicloudDataTransferConfigsId"><code>multicloudDataTransferConfigsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single MulticloudDataTransferConfig.</td>
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
<tr id="parameter-multicloudDataTransferConfigId">
    <td><CopyableCode code="multicloudDataTransferConfigId" /></td>
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

Gets details of a single MulticloudDataTransferConfig.

```sql
SELECT
name,
createTime,
description,
destinationsActiveCount,
destinationsCount,
etag,
labels,
services,
uid,
updateTime
FROM google.networkconnectivity.multicloud_data_transfer_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists MulticloudDataTransferConfigs in a given project and location.

```sql
SELECT
name,
createTime,
description,
destinationsActiveCount,
destinationsCount,
etag,
labels,
services,
uid,
updateTime
FROM google.networkconnectivity.multicloud_data_transfer_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a MulticloudDataTransferConfig in a given project and location.

```sql
INSERT INTO google.networkconnectivity.multicloud_data_transfer_configs (
data__name,
data__labels,
data__etag,
data__description,
data__services,
projectsId,
locationsId,
multicloudDataTransferConfigId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ etag }}',
'{{ description }}',
'{{ services }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ multicloudDataTransferConfigId }}',
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
- name: multicloud_data_transfer_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the multicloud_data_transfer_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the multicloud_data_transfer_configs resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the MulticloudDataTransferConfig resource. Format: `projects/{project}/locations/{location}/multicloudDataTransferConfigs/{multicloud_data_transfer_config}`.
        
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
        
    - name: services
      value: object
      description: >
        Optional. This map services to either their current or planned states. Service names are keys, and the associated values describe the service's state. If a state change is expected, the value will be the list of ADDING or DELETING states depending on the actions taken. Example: "services": { "big-query": { "states": [ { "state": "ADDING", "effective_time": "2024-12-12T08:00:00Z" }, ] }, "cloud-storage": { "states": [ { "state": "ACTIVE", } ] } }
        
    - name: multicloudDataTransferConfigId
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

Updates a MulticloudDataTransferConfig in a given project and location.

```sql
UPDATE google.networkconnectivity.multicloud_data_transfer_configs
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__description = '{{ description }}',
data__services = '{{ services }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' --required
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

Deletes a single MulticloudDataTransferConfig.

```sql
DELETE FROM google.networkconnectivity.multicloud_data_transfer_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND multicloudDataTransferConfigsId = '{{ multicloudDataTransferConfigsId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
