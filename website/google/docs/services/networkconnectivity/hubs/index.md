--- 
title: hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - hubs
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

Creates, updates, deletes, gets or lists a <code>hubs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hubs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.hubs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_status', value: 'query_status' },
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
    <td>Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/&#123;project_number&#125;/locations/global/hubs/&#123;hub_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the hub was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="exportPsc" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether Private Service Connect connection propagation is enabled for the hub. If true, Private Service Connect endpoints in VPC spokes attached to the hub are made accessible to other VPC spokes attached to the hub. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="policyMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The policy mode of this hub. This field can be either PRESET or CUSTOM. If unspecified, the policy_mode defaults to PRESET.</td>
</tr>
<tr>
    <td><CopyableCode code="presetTopology" /></td>
    <td><code>string</code></td>
    <td>Optional. The topology implemented in this hub. Currently, this field is only used when policy_mode = PRESET. The available preset topologies are MESH and STAR. If preset_topology is unspecified and policy_mode = PRESET, the preset_topology defaults to MESH. When policy_mode = CUSTOM, the preset_topology is set to PRESET_TOPOLOGY_UNSPECIFIED.</td>
</tr>
<tr>
    <td><CopyableCode code="routeTables" /></td>
    <td><code>array</code></td>
    <td>Output only. The route tables that belong to this hub. They use the following form: `projects/&#123;project_number&#125;/locations/global/hubs/&#123;hub_id&#125;/routeTables/&#123;route_table_id&#125;` This field is read-only. Network Connectivity Center automatically populates it based on the route tables nested under the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="routingVpcs" /></td>
    <td><code>array</code></td>
    <td>Output only. The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="spokeSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. A summary of the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason. (id: SpokeSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this hub.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the hub was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_status">

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
    <td><CopyableCode code="hubStatusEntries" /></td>
    <td><code>array</code></td>
    <td>The list of hub status.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.</td>
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
    <td>Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/&#123;project_number&#125;/locations/global/hubs/&#123;hub_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the hub was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="exportPsc" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether Private Service Connect connection propagation is enabled for the hub. If true, Private Service Connect endpoints in VPC spokes attached to the hub are made accessible to other VPC spokes attached to the hub. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="policyMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The policy mode of this hub. This field can be either PRESET or CUSTOM. If unspecified, the policy_mode defaults to PRESET.</td>
</tr>
<tr>
    <td><CopyableCode code="presetTopology" /></td>
    <td><code>string</code></td>
    <td>Optional. The topology implemented in this hub. Currently, this field is only used when policy_mode = PRESET. The available preset topologies are MESH and STAR. If preset_topology is unspecified and policy_mode = PRESET, the preset_topology defaults to MESH. When policy_mode = CUSTOM, the preset_topology is set to PRESET_TOPOLOGY_UNSPECIFIED.</td>
</tr>
<tr>
    <td><CopyableCode code="routeTables" /></td>
    <td><code>array</code></td>
    <td>Output only. The route tables that belong to this hub. They use the following form: `projects/&#123;project_number&#125;/locations/global/hubs/&#123;hub_id&#125;/routeTables/&#123;route_table_id&#125;` This field is read-only. Network Connectivity Center automatically populates it based on the route tables nested under the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="routingVpcs" /></td>
    <td><code>array</code></td>
    <td>Output only. The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub.</td>
</tr>
<tr>
    <td><CopyableCode code="spokeSummary" /></td>
    <td><code>object</code></td>
    <td>Output only. A summary of the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason. (id: SpokeSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this hub.</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the hub was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td></td>
    <td>Gets details about a Network Connectivity Center hub.</td>
</tr>
<tr>
    <td><a href="#query_status"><CopyableCode code="query_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-groupBy"><code>groupBy</code></a></td>
    <td>Query the Private Service Connect propagation status of a Network Connectivity Center hub.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the Network Connectivity Center hubs associated with a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-hubId"><code>hubId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Network Connectivity Center hub in the specified project.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the description and/or labels of a Network Connectivity Center hub.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a Network Connectivity Center hub.</td>
</tr>
<tr>
    <td><a href="#reject_spoke"><CopyableCode code="reject_spoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td></td>
    <td>Rejects a Network Connectivity Center spoke from being attached to a hub. If the spoke was previously in the `ACTIVE` state, it transitions to the `INACTIVE` state and is no longer able to connect to other spokes that are attached to the hub.</td>
</tr>
<tr>
    <td><a href="#accept_spoke"><CopyableCode code="accept_spoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td></td>
    <td>Accepts a proposal to attach a Network Connectivity Center spoke to a hub.</td>
</tr>
<tr>
    <td><a href="#accept_spoke_update"><CopyableCode code="accept_spoke_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td></td>
    <td>Accepts a proposal to update a Network Connectivity Center spoke in a hub.</td>
</tr>
<tr>
    <td><a href="#reject_spoke_update"><CopyableCode code="reject_spoke_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-hubsId"><code>hubsId</code></a></td>
    <td></td>
    <td>Rejects a proposal to update a Network Connectivity Center spoke in a hub.</td>
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
<tr id="parameter-hubsId">
    <td><CopyableCode code="hubsId" /></td>
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
<tr id="parameter-groupBy">
    <td><CopyableCode code="groupBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-hubId">
    <td><CopyableCode code="hubId" /></td>
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
        { label: 'query_status', value: 'query_status' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details about a Network Connectivity Center hub.

```sql
SELECT
name,
createTime,
description,
exportPsc,
labels,
policyMode,
presetTopology,
routeTables,
routingVpcs,
spokeSummary,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.hubs
WHERE projectsId = '{{ projectsId }}' -- required
AND hubsId = '{{ hubsId }}' -- required;
```
</TabItem>
<TabItem value="query_status">

Query the Private Service Connect propagation status of a Network Connectivity Center hub.

```sql
SELECT
hubStatusEntries,
nextPageToken
FROM google.networkconnectivity.hubs
WHERE projectsId = '{{ projectsId }}' -- required
AND hubsId = '{{ hubsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND groupBy = '{{ groupBy }}';
```
</TabItem>
<TabItem value="list">

Lists the Network Connectivity Center hubs associated with a given project.

```sql
SELECT
name,
createTime,
description,
exportPsc,
labels,
policyMode,
presetTopology,
routeTables,
routingVpcs,
spokeSummary,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.hubs
WHERE projectsId = '{{ projectsId }}' -- required
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

Creates a new Network Connectivity Center hub in the specified project.

```sql
INSERT INTO google.networkconnectivity.hubs (
data__name,
data__labels,
data__description,
data__policyMode,
data__presetTopology,
data__exportPsc,
projectsId,
hubId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ policyMode }}',
'{{ presetTopology }}',
{{ exportPsc }},
'{{ projectsId }}',
'{{ hubId }}',
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
- name: hubs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the hubs resource.
    - name: name
      value: string
      description: >
        Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}`
        
    - name: labels
      value: object
      description: >
        Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
        
    - name: description
      value: string
      description: >
        Optional. An optional description of the hub.
        
    - name: policyMode
      value: string
      description: >
        Optional. The policy mode of this hub. This field can be either PRESET or CUSTOM. If unspecified, the policy_mode defaults to PRESET.
        
      valid_values: ['POLICY_MODE_UNSPECIFIED', 'PRESET']
    - name: presetTopology
      value: string
      description: >
        Optional. The topology implemented in this hub. Currently, this field is only used when policy_mode = PRESET. The available preset topologies are MESH and STAR. If preset_topology is unspecified and policy_mode = PRESET, the preset_topology defaults to MESH. When policy_mode = CUSTOM, the preset_topology is set to PRESET_TOPOLOGY_UNSPECIFIED.
        
      valid_values: ['PRESET_TOPOLOGY_UNSPECIFIED', 'MESH', 'STAR']
    - name: exportPsc
      value: boolean
      description: >
        Optional. Whether Private Service Connect connection propagation is enabled for the hub. If true, Private Service Connect endpoints in VPC spokes attached to the hub are made accessible to other VPC spokes attached to the hub. The default value is false.
        
    - name: hubId
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

Updates the description and/or labels of a Network Connectivity Center hub.

```sql
UPDATE google.networkconnectivity.hubs
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__policyMode = '{{ policyMode }}',
data__presetTopology = '{{ presetTopology }}',
data__exportPsc = {{ exportPsc }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND hubsId = '{{ hubsId }}' --required
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

Deletes a Network Connectivity Center hub.

```sql
DELETE FROM google.networkconnectivity.hubs
WHERE projectsId = '{{ projectsId }}' --required
AND hubsId = '{{ hubsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reject_spoke"
    values={[
        { label: 'reject_spoke', value: 'reject_spoke' },
        { label: 'accept_spoke', value: 'accept_spoke' },
        { label: 'accept_spoke_update', value: 'accept_spoke_update' },
        { label: 'reject_spoke_update', value: 'reject_spoke_update' }
    ]}
>
<TabItem value="reject_spoke">

Rejects a Network Connectivity Center spoke from being attached to a hub. If the spoke was previously in the `ACTIVE` state, it transitions to the `INACTIVE` state and is no longer able to connect to other spokes that are attached to the hub.

```sql
EXEC google.networkconnectivity.hubs.reject_spoke 
@projectsId='{{ projectsId }}' --required, 
@hubsId='{{ hubsId }}' --required 
@@json=
'{
"spokeUri": "{{ spokeUri }}", 
"requestId": "{{ requestId }}", 
"details": "{{ details }}"
}';
```
</TabItem>
<TabItem value="accept_spoke">

Accepts a proposal to attach a Network Connectivity Center spoke to a hub.

```sql
EXEC google.networkconnectivity.hubs.accept_spoke 
@projectsId='{{ projectsId }}' --required, 
@hubsId='{{ hubsId }}' --required 
@@json=
'{
"spokeUri": "{{ spokeUri }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="accept_spoke_update">

Accepts a proposal to update a Network Connectivity Center spoke in a hub.

```sql
EXEC google.networkconnectivity.hubs.accept_spoke_update 
@projectsId='{{ projectsId }}' --required, 
@hubsId='{{ hubsId }}' --required 
@@json=
'{
"spokeUri": "{{ spokeUri }}", 
"spokeEtag": "{{ spokeEtag }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
<TabItem value="reject_spoke_update">

Rejects a proposal to update a Network Connectivity Center spoke in a hub.

```sql
EXEC google.networkconnectivity.hubs.reject_spoke_update 
@projectsId='{{ projectsId }}' --required, 
@hubsId='{{ hubsId }}' --required 
@@json=
'{
"spokeUri": "{{ spokeUri }}", 
"spokeEtag": "{{ spokeEtag }}", 
"details": "{{ details }}", 
"requestId": "{{ requestId }}"
}';
```
</TabItem>
</Tabs>
