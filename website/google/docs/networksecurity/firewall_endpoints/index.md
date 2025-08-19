--- 
title: firewall_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_endpoints
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>firewall_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>firewall_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.firewall_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_firewall_endpoints_get"
    values={[
        { label: 'organizations_locations_firewall_endpoints_get', value: 'organizations_locations_firewall_endpoints_get' },
        { label: 'organizations_locations_firewall_endpoints_list', value: 'organizations_locations_firewall_endpoints_list' }
    ]}
>
<TabItem value="organizations_locations_firewall_endpoints_get">

Message describing Endpoint object.

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
    <td>Immutable. Identifier. Name of resource.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedNetworks" /></td>
    <td><code>array</code></td>
    <td>Output only. List of networks that are associated with this endpoint in the local zone. This is a projection of the FirewallEndpointAssociations pointing at this endpoint. A network will only appear in this list after traffic routing is fully configured. Format: projects/&#123;project&#125;/global/networks/&#123;name&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="associations" /></td>
    <td><code>array</code></td>
    <td>Output only. List of FirewallEndpointAssociations that are associated to this endpoint. An association will only appear in this list after traffic routing is fully configured.</td>
</tr>
<tr>
    <td><CopyableCode code="billingProjectId" /></td>
    <td><code>string</code></td>
    <td>Required. Project to bill on endpoint uptime usage.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the firewall endpoint. Max length 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_firewall_endpoints_list">

Message for response to listing Endpoints

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
    <td><CopyableCode code="firewallEndpoints" /></td>
    <td><code>array</code></td>
    <td>The list of Endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
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
    <td><a href="#organizations_locations_firewall_endpoints_get"><CopyableCode code="organizations_locations_firewall_endpoints_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-firewallEndpointsId"><code>firewallEndpointsId</code></a></td>
    <td></td>
    <td>Gets details of a single Endpoint.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_firewall_endpoints_list"><CopyableCode code="organizations_locations_firewall_endpoints_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists FirewallEndpoints in a given project and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_firewall_endpoints_create"><CopyableCode code="organizations_locations_firewall_endpoints_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-firewallEndpointId"><code>firewallEndpointId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new FirewallEndpoint in a given project and location.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_firewall_endpoints_patch"><CopyableCode code="organizations_locations_firewall_endpoints_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-firewallEndpointsId"><code>firewallEndpointsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a single Endpoint.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_firewall_endpoints_delete"><CopyableCode code="organizations_locations_firewall_endpoints_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-firewallEndpointsId"><code>firewallEndpointsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Endpoint.</td>
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
<tr id="parameter-firewallEndpointsId">
    <td><CopyableCode code="firewallEndpointsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-firewallEndpointId">
    <td><CopyableCode code="firewallEndpointId" /></td>
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
    defaultValue="organizations_locations_firewall_endpoints_get"
    values={[
        { label: 'organizations_locations_firewall_endpoints_get', value: 'organizations_locations_firewall_endpoints_get' },
        { label: 'organizations_locations_firewall_endpoints_list', value: 'organizations_locations_firewall_endpoints_list' }
    ]}
>
<TabItem value="organizations_locations_firewall_endpoints_get">

Gets details of a single Endpoint.

```sql
SELECT
name,
associatedNetworks,
associations,
billingProjectId,
createTime,
description,
labels,
reconciling,
satisfiesPzi,
satisfiesPzs,
state,
updateTime
FROM google.networksecurity.firewall_endpoints
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND firewallEndpointsId = '{{ firewallEndpointsId }}' -- required;
```
</TabItem>
<TabItem value="organizations_locations_firewall_endpoints_list">

Lists FirewallEndpoints in a given project and location.

```sql
SELECT
firewallEndpoints,
nextPageToken,
unreachable
FROM google.networksecurity.firewall_endpoints
WHERE organizationsId = '{{ organizationsId }}' -- required
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
    defaultValue="organizations_locations_firewall_endpoints_create"
    values={[
        { label: 'organizations_locations_firewall_endpoints_create', value: 'organizations_locations_firewall_endpoints_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_firewall_endpoints_create">

Creates a new FirewallEndpoint in a given project and location.

```sql
INSERT INTO google.networksecurity.firewall_endpoints (
data__name,
data__description,
data__labels,
data__billingProjectId,
organizationsId,
locationsId,
firewallEndpointId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ billingProjectId }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ firewallEndpointId }}',
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
- name: firewall_endpoints
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the firewall_endpoints resource.
    - name: locationsId
      value: string
      description: Required parameter for the firewall_endpoints resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. Name of resource.
        
    - name: description
      value: string
      description: >
        Optional. Description of the firewall endpoint. Max length 2048 characters.
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: billingProjectId
      value: string
      description: >
        Required. Project to bill on endpoint uptime usage.
        
    - name: firewallEndpointId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_locations_firewall_endpoints_patch"
    values={[
        { label: 'organizations_locations_firewall_endpoints_patch', value: 'organizations_locations_firewall_endpoints_patch' }
    ]}
>
<TabItem value="organizations_locations_firewall_endpoints_patch">

Update a single Endpoint.

```sql
UPDATE google.networksecurity.firewall_endpoints
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__billingProjectId = '{{ billingProjectId }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND firewallEndpointsId = '{{ firewallEndpointsId }}' --required
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
    defaultValue="organizations_locations_firewall_endpoints_delete"
    values={[
        { label: 'organizations_locations_firewall_endpoints_delete', value: 'organizations_locations_firewall_endpoints_delete' }
    ]}
>
<TabItem value="organizations_locations_firewall_endpoints_delete">

Deletes a single Endpoint.

```sql
DELETE FROM google.networksecurity.firewall_endpoints
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND firewallEndpointsId = '{{ firewallEndpointsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
