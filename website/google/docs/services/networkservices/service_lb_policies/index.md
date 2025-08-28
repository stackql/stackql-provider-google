--- 
title: service_lb_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_lb_policies
  - networkservices
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

Creates, updates, deletes, gets or lists a <code>service_lb_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_lb_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.service_lb_policies" /></td></tr>
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
    <td>Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/&#123;project&#125;/locations/&#123;location&#125;/serviceLbPolicies/&#123;service_lb_policy_name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="autoCapacityDrain" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration to automatically move traffic away for unhealthy IG/NEG for the associated Backend Service. (id: ServiceLbPolicyAutoCapacityDrain)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="failoverConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration related to health based failover. (id: ServiceLbPolicyFailoverConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="isolationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration to provide isolation support for the associated Backend Service. (id: ServiceLbPolicyIsolationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the ServiceLbPolicy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingAlgorithm" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this resource was last updated.</td>
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
    <td>Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/&#123;project&#125;/locations/&#123;location&#125;/serviceLbPolicies/&#123;service_lb_policy_name&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="autoCapacityDrain" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration to automatically move traffic away for unhealthy IG/NEG for the associated Backend Service. (id: ServiceLbPolicyAutoCapacityDrain)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="failoverConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration related to health based failover. (id: ServiceLbPolicyFailoverConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="isolationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration to provide isolation support for the associated Backend Service. (id: ServiceLbPolicyIsolationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the ServiceLbPolicy resource.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancingAlgorithm" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this resource was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceLbPoliciesId"><code>serviceLbPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single ServiceLbPolicy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists ServiceLbPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-serviceLbPolicyId"><code>serviceLbPolicyId</code></a></td>
    <td>Creates a new ServiceLbPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceLbPoliciesId"><code>serviceLbPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single ServiceLbPolicy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceLbPoliciesId"><code>serviceLbPoliciesId</code></a></td>
    <td></td>
    <td>Deletes a single ServiceLbPolicy.</td>
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
<tr id="parameter-serviceLbPoliciesId">
    <td><CopyableCode code="serviceLbPoliciesId" /></td>
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
<tr id="parameter-serviceLbPolicyId">
    <td><CopyableCode code="serviceLbPolicyId" /></td>
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

Gets details of a single ServiceLbPolicy.

```sql
SELECT
name,
autoCapacityDrain,
createTime,
description,
failoverConfig,
isolationConfig,
labels,
loadBalancingAlgorithm,
updateTime
FROM google.networkservices.service_lb_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND serviceLbPoliciesId = '{{ serviceLbPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ServiceLbPolicies in a given project and location.

```sql
SELECT
name,
autoCapacityDrain,
createTime,
description,
failoverConfig,
isolationConfig,
labels,
loadBalancingAlgorithm,
updateTime
FROM google.networkservices.service_lb_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new ServiceLbPolicy in a given project and location.

```sql
INSERT INTO google.networkservices.service_lb_policies (
data__name,
data__labels,
data__description,
data__loadBalancingAlgorithm,
data__autoCapacityDrain,
data__failoverConfig,
data__isolationConfig,
projectsId,
locationsId,
serviceLbPolicyId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ loadBalancingAlgorithm }}',
'{{ autoCapacityDrain }}',
'{{ failoverConfig }}',
'{{ isolationConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ serviceLbPolicyId }}'
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
- name: service_lb_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the service_lb_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the service_lb_policies resource.
    - name: name
      value: string
      description: >
        Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`.
        
    - name: labels
      value: object
      description: >
        Optional. Set of label tags associated with the ServiceLbPolicy resource.
        
    - name: description
      value: string
      description: >
        Optional. A free-text description of the resource. Max length 1024 characters.
        
    - name: loadBalancingAlgorithm
      value: string
      description: >
        Optional. The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION.
        
      valid_values: ['LOAD_BALANCING_ALGORITHM_UNSPECIFIED', 'SPRAY_TO_WORLD', 'SPRAY_TO_REGION', 'WATERFALL_BY_REGION', 'WATERFALL_BY_ZONE']
    - name: autoCapacityDrain
      value: object
      description: >
        Optional. Configuration to automatically move traffic away for unhealthy IG/NEG for the associated Backend Service.
        
    - name: failoverConfig
      value: object
      description: >
        Optional. Configuration related to health based failover.
        
    - name: isolationConfig
      value: object
      description: >
        Optional. Configuration to provide isolation support for the associated Backend Service.
        
    - name: serviceLbPolicyId
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

Updates the parameters of a single ServiceLbPolicy.

```sql
UPDATE google.networkservices.service_lb_policies
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__loadBalancingAlgorithm = '{{ loadBalancingAlgorithm }}',
data__autoCapacityDrain = '{{ autoCapacityDrain }}',
data__failoverConfig = '{{ failoverConfig }}',
data__isolationConfig = '{{ isolationConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serviceLbPoliciesId = '{{ serviceLbPoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes a single ServiceLbPolicy.

```sql
DELETE FROM google.networkservices.service_lb_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serviceLbPoliciesId = '{{ serviceLbPoliciesId }}' --required;
```
</TabItem>
</Tabs>
