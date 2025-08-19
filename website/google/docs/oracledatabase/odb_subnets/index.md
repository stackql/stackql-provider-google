--- 
title: odb_subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - odb_subnets
  - oracledatabase
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

Creates, updates, deletes, gets or lists an <code>odb_subnets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>odb_subnets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.odb_subnets" /></td></tr>
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

Represents OdbSubnet resource.

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
    <td>Identifier. The name of the OdbSubnet resource in the following format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="cidrRange" /></td>
    <td><code>string</code></td>
    <td>Required. The CIDR range of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the OdbNetwork was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels or tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td>Required. Purpose of the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the ODB Subnet.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The response for `OdbSubnet.List`.

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
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnets" /></td>
    <td><code>array</code></td>
    <td>The list of ODB Subnets.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unreachable locations when listing resources across all locations using wildcard location '-'.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-odbNetworksId"><code>odbNetworksId</code></a>, <a href="#parameter-odbSubnetsId"><code>odbSubnetsId</code></a></td>
    <td></td>
    <td>Gets details of a single ODB Subnet.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-odbNetworksId"><code>odbNetworksId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all the ODB Subnets in a given ODB Network.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-odbNetworksId"><code>odbNetworksId</code></a></td>
    <td><a href="#parameter-odbSubnetId"><code>odbSubnetId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ODB Subnet in a given ODB Network.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-odbNetworksId"><code>odbNetworksId</code></a>, <a href="#parameter-odbSubnetsId"><code>odbSubnetsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single ODB Subnet.</td>
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
<tr id="parameter-odbNetworksId">
    <td><CopyableCode code="odbNetworksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-odbSubnetsId">
    <td><CopyableCode code="odbSubnetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-odbSubnetId">
    <td><CopyableCode code="odbSubnetId" /></td>
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

Gets details of a single ODB Subnet.

```sql
SELECT
name,
cidrRange,
createTime,
labels,
purpose,
state
FROM google.oracledatabase.odb_subnets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND odbNetworksId = '{{ odbNetworksId }}' -- required
AND odbSubnetsId = '{{ odbSubnetsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all the ODB Subnets in a given ODB Network.

```sql
SELECT
nextPageToken,
odbSubnets,
unreachable
FROM google.oracledatabase.odb_subnets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND odbNetworksId = '{{ odbNetworksId }}' -- required
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

Creates a new ODB Subnet in a given ODB Network.

```sql
INSERT INTO google.oracledatabase.odb_subnets (
data__name,
data__cidrRange,
data__purpose,
data__labels,
projectsId,
locationsId,
odbNetworksId,
odbSubnetId,
requestId
)
SELECT 
'{{ name }}',
'{{ cidrRange }}',
'{{ purpose }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ odbNetworksId }}',
'{{ odbSubnetId }}',
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
- name: odb_subnets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the odb_subnets resource.
    - name: locationsId
      value: string
      description: Required parameter for the odb_subnets resource.
    - name: odbNetworksId
      value: string
      description: Required parameter for the odb_subnets resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the OdbSubnet resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
        
    - name: cidrRange
      value: string
      description: >
        Required. The CIDR range of the subnet.
        
    - name: purpose
      value: string
      description: >
        Required. Purpose of the subnet.
        
      valid_values: ['PURPOSE_UNSPECIFIED', 'CLIENT_SUBNET', 'BACKUP_SUBNET']
    - name: labels
      value: object
      description: >
        Optional. Labels or tags associated with the resource.
        
    - name: odbSubnetId
      value: string
    - name: requestId
      value: string
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

Deletes a single ODB Subnet.

```sql
DELETE FROM google.oracledatabase.odb_subnets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND odbNetworksId = '{{ odbNetworksId }}' --required
AND odbSubnetsId = '{{ odbSubnetsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
