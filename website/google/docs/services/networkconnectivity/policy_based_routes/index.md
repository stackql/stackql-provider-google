--- 
title: policy_based_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_based_routes
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

Creates, updates, deletes, gets or lists a <code>policy_based_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>policy_based_routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.policy_based_routes" /></td></tr>
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
    <td>Immutable. A unique name of the resource in the form of `projects/&#123;project_number&#125;/locations/global/PolicyBasedRoutes/&#123;policy_based_route_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the policy-based route was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of this resource. Provide this field when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Required. The filter to match L4 traffic. (id: Filter)</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectAttachment" /></td>
    <td><code>object</code></td>
    <td>Optional. The interconnect attachments that this policy-based route applies to. (id: InterconnectAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of this resource. Always networkconnectivity#policyBasedRoute for policy-based Route resources.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopIlbIp" /></td>
    <td><code>string</code></td>
    <td>Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopOtherRoutes" /></td>
    <td><code>string</code></td>
    <td>Optional. Other routes that will be referenced to determine the next hop of the packet.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the policy-based route was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualMachine" /></td>
    <td><code>object</code></td>
    <td>Optional. VM instances that this policy-based route applies to. (id: VirtualMachine)</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. If potential misconfigurations are detected for this route, this field will be populated with warning messages.</td>
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
    <td>Immutable. A unique name of the resource in the form of `projects/&#123;project_number&#125;/locations/global/PolicyBasedRoutes/&#123;policy_based_route_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the policy-based route was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional description of this resource. Provide this field when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Required. The filter to match L4 traffic. (id: Filter)</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectAttachment" /></td>
    <td><code>object</code></td>
    <td>Optional. The interconnect attachments that this policy-based route applies to. (id: InterconnectAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of this resource. Always networkconnectivity#policyBasedRoute for policy-based Route resources.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopIlbIp" /></td>
    <td><code>string</code></td>
    <td>Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="nextHopOtherRoutes" /></td>
    <td><code>string</code></td>
    <td>Optional. Other routes that will be referenced to determine the next hop of the packet.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the policy-based route was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualMachine" /></td>
    <td><code>object</code></td>
    <td>Optional. VM instances that this policy-based route applies to. (id: VirtualMachine)</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. If potential misconfigurations are detected for this route, this field will be populated with warning messages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policyBasedRoutesId"><code>policyBasedRoutesId</code></a></td>
    <td></td>
    <td>Gets details of a single policy-based route.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists policy-based routes in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-policyBasedRouteId"><code>policyBasedRouteId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new policy-based route in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-policyBasedRoutesId"><code>policyBasedRoutesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single policy-based route.</td>
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
<tr id="parameter-policyBasedRoutesId">
    <td><CopyableCode code="policyBasedRoutesId" /></td>
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
<tr id="parameter-policyBasedRouteId">
    <td><CopyableCode code="policyBasedRouteId" /></td>
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

Gets details of a single policy-based route.

```sql
SELECT
name,
createTime,
description,
filter,
interconnectAttachment,
kind,
labels,
network,
nextHopIlbIp,
nextHopOtherRoutes,
priority,
selfLink,
updateTime,
virtualMachine,
warnings
FROM google.networkconnectivity.policy_based_routes
WHERE projectsId = '{{ projectsId }}' -- required
AND policyBasedRoutesId = '{{ policyBasedRoutesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists policy-based routes in a given project and location.

```sql
SELECT
name,
createTime,
description,
filter,
interconnectAttachment,
kind,
labels,
network,
nextHopIlbIp,
nextHopOtherRoutes,
priority,
selfLink,
updateTime,
virtualMachine,
warnings
FROM google.networkconnectivity.policy_based_routes
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

Creates a new policy-based route in a given project and location.

```sql
INSERT INTO google.networkconnectivity.policy_based_routes (
data__virtualMachine,
data__interconnectAttachment,
data__nextHopIlbIp,
data__nextHopOtherRoutes,
data__name,
data__labels,
data__description,
data__network,
data__filter,
data__priority,
projectsId,
policyBasedRouteId,
requestId
)
SELECT 
'{{ virtualMachine }}',
'{{ interconnectAttachment }}',
'{{ nextHopIlbIp }}',
'{{ nextHopOtherRoutes }}',
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ network }}',
'{{ filter }}',
{{ priority }},
'{{ projectsId }}',
'{{ policyBasedRouteId }}',
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
- name: policy_based_routes
  props:
    - name: projectsId
      value: string
      description: Required parameter for the policy_based_routes resource.
    - name: virtualMachine
      value: object
      description: >
        Optional. VM instances that this policy-based route applies to.
        
    - name: interconnectAttachment
      value: object
      description: >
        Optional. The interconnect attachments that this policy-based route applies to.
        
    - name: nextHopIlbIp
      value: string
      description: >
        Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported.
        
    - name: nextHopOtherRoutes
      value: string
      description: >
        Optional. Other routes that will be referenced to determine the next hop of the packet.
        
      valid_values: ['OTHER_ROUTES_UNSPECIFIED', 'DEFAULT_ROUTING']
    - name: name
      value: string
      description: >
        Immutable. A unique name of the resource in the form of `projects/{project_number}/locations/global/PolicyBasedRoutes/{policy_based_route_id}`
        
    - name: labels
      value: object
      description: >
        User-defined labels.
        
    - name: description
      value: string
      description: >
        Optional. An optional description of this resource. Provide this field when you create the resource.
        
    - name: network
      value: string
      description: >
        Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.
        
    - name: filter
      value: object
      description: >
        Required. The filter to match L4 traffic.
        
    - name: priority
      value: integer
      description: >
        Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.
        
    - name: policyBasedRouteId
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

Deletes a single policy-based route.

```sql
DELETE FROM google.networkconnectivity.policy_based_routes
WHERE projectsId = '{{ projectsId }}' --required
AND policyBasedRoutesId = '{{ policyBasedRoutesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
