--- 
title: firewall_endpoint_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_endpoint_associations
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

Creates, updates, deletes, gets or lists a <code>firewall_endpoint_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>firewall_endpoint_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.firewall_endpoint_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_firewall_endpoint_associations_get"
    values={[
        { label: 'projects_locations_firewall_endpoint_associations_get', value: 'projects_locations_firewall_endpoint_associations_get' },
        { label: 'projects_locations_firewall_endpoint_associations_list', value: 'projects_locations_firewall_endpoint_associations_list' }
    ]}
>
<TabItem value="projects_locations_firewall_endpoint_associations_get">

Message describing Association object

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
    <td>Immutable. Identifier. name of resource</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the association is disabled. True indicates that traffic won't be intercepted</td>
</tr>
<tr>
    <td><CopyableCode code="firewallEndpoint" /></td>
    <td><code>string</code></td>
    <td>Required. The URL of the FirewallEndpoint that is being associated.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The URL of the network that is being associated.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsInspectionPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. The URL of the TlsInspectionPolicy that is being associated.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_firewall_endpoint_associations_list">

Message for response to listing Associations

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
    <td><CopyableCode code="firewallEndpointAssociations" /></td>
    <td><code>array</code></td>
    <td>The list of Association</td>
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
    <td><a href="#projects_locations_firewall_endpoint_associations_get"><CopyableCode code="projects_locations_firewall_endpoint_associations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-firewallEndpointAssociationsId"><code>firewallEndpointAssociationsId</code></a></td>
    <td></td>
    <td>Gets details of a single FirewallEndpointAssociation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_firewall_endpoint_associations_list"><CopyableCode code="projects_locations_firewall_endpoint_associations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Associations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_firewall_endpoint_associations_create"><CopyableCode code="projects_locations_firewall_endpoint_associations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-firewallEndpointAssociationId"><code>firewallEndpointAssociationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new FirewallEndpointAssociation in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_firewall_endpoint_associations_patch"><CopyableCode code="projects_locations_firewall_endpoint_associations_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-firewallEndpointAssociationsId"><code>firewallEndpointAssociationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a single FirewallEndpointAssociation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_firewall_endpoint_associations_delete"><CopyableCode code="projects_locations_firewall_endpoint_associations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-firewallEndpointAssociationsId"><code>firewallEndpointAssociationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single FirewallEndpointAssociation.</td>
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
<tr id="parameter-firewallEndpointAssociationsId">
    <td><CopyableCode code="firewallEndpointAssociationsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-firewallEndpointAssociationId">
    <td><CopyableCode code="firewallEndpointAssociationId" /></td>
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
    defaultValue="projects_locations_firewall_endpoint_associations_get"
    values={[
        { label: 'projects_locations_firewall_endpoint_associations_get', value: 'projects_locations_firewall_endpoint_associations_get' },
        { label: 'projects_locations_firewall_endpoint_associations_list', value: 'projects_locations_firewall_endpoint_associations_list' }
    ]}
>
<TabItem value="projects_locations_firewall_endpoint_associations_get">

Gets details of a single FirewallEndpointAssociation.

```sql
SELECT
name,
createTime,
disabled,
firewallEndpoint,
labels,
network,
reconciling,
state,
tlsInspectionPolicy,
updateTime
FROM google.networksecurity.firewall_endpoint_associations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND firewallEndpointAssociationsId = '{{ firewallEndpointAssociationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_firewall_endpoint_associations_list">

Lists Associations in a given project and location.

```sql
SELECT
firewallEndpointAssociations,
nextPageToken,
unreachable
FROM google.networksecurity.firewall_endpoint_associations
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
    defaultValue="projects_locations_firewall_endpoint_associations_create"
    values={[
        { label: 'projects_locations_firewall_endpoint_associations_create', value: 'projects_locations_firewall_endpoint_associations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_firewall_endpoint_associations_create">

Creates a new FirewallEndpointAssociation in a given project and location.

```sql
INSERT INTO google.networksecurity.firewall_endpoint_associations (
data__name,
data__labels,
data__network,
data__firewallEndpoint,
data__tlsInspectionPolicy,
data__disabled,
projectsId,
locationsId,
firewallEndpointAssociationId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ network }}',
'{{ firewallEndpoint }}',
'{{ tlsInspectionPolicy }}',
{{ disabled }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ firewallEndpointAssociationId }}',
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
- name: firewall_endpoint_associations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the firewall_endpoint_associations resource.
    - name: locationsId
      value: string
      description: Required parameter for the firewall_endpoint_associations resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. name of resource
        
    - name: labels
      value: object
      description: >
        Optional. Labels as key value pairs
        
    - name: network
      value: string
      description: >
        Required. The URL of the network that is being associated.
        
    - name: firewallEndpoint
      value: string
      description: >
        Required. The URL of the FirewallEndpoint that is being associated.
        
    - name: tlsInspectionPolicy
      value: string
      description: >
        Optional. The URL of the TlsInspectionPolicy that is being associated.
        
    - name: disabled
      value: boolean
      description: >
        Optional. Whether the association is disabled. True indicates that traffic won't be intercepted
        
    - name: firewallEndpointAssociationId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_firewall_endpoint_associations_patch"
    values={[
        { label: 'projects_locations_firewall_endpoint_associations_patch', value: 'projects_locations_firewall_endpoint_associations_patch' }
    ]}
>
<TabItem value="projects_locations_firewall_endpoint_associations_patch">

Update a single FirewallEndpointAssociation.

```sql
UPDATE google.networksecurity.firewall_endpoint_associations
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__network = '{{ network }}',
data__firewallEndpoint = '{{ firewallEndpoint }}',
data__tlsInspectionPolicy = '{{ tlsInspectionPolicy }}',
data__disabled = {{ disabled }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND firewallEndpointAssociationsId = '{{ firewallEndpointAssociationsId }}' --required
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
    defaultValue="projects_locations_firewall_endpoint_associations_delete"
    values={[
        { label: 'projects_locations_firewall_endpoint_associations_delete', value: 'projects_locations_firewall_endpoint_associations_delete' }
    ]}
>
<TabItem value="projects_locations_firewall_endpoint_associations_delete">

Deletes a single FirewallEndpointAssociation.

```sql
DELETE FROM google.networksecurity.firewall_endpoint_associations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND firewallEndpointAssociationsId = '{{ firewallEndpointAssociationsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
