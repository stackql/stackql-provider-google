--- 
title: autoscaling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - autoscaling_policies
  - dataproc
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

Creates, updates, deletes, gets or lists an <code>autoscaling_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>autoscaling_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.autoscaling_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_regions_autoscaling_policies_get"
    values={[
        { label: 'projects_regions_autoscaling_policies_get', value: 'projects_regions_autoscaling_policies_get' },
        { label: 'projects_locations_autoscaling_policies_get', value: 'projects_locations_autoscaling_policies_get' },
        { label: 'projects_regions_autoscaling_policies_list', value: 'projects_regions_autoscaling_policies_list' },
        { label: 'projects_locations_autoscaling_policies_list', value: 'projects_locations_autoscaling_policies_list' }
    ]}
>
<TabItem value="projects_regions_autoscaling_policies_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/autoscalingPolicies/&#123;policy_id&#125; For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/autoscalingPolicies/&#123;policy_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="basicAlgorithm" /></td>
    <td><code>object</code></td>
    <td>Basic algorithm for autoscaling. (id: BasicAutoscalingAlgorithm)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the clusters for which this autoscaling policy is to be configured.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryWorkerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes how the autoscaler will operate for secondary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="workerConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Describes how the autoscaler will operate for primary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/autoscalingPolicies/&#123;policy_id&#125; For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/autoscalingPolicies/&#123;policy_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="basicAlgorithm" /></td>
    <td><code>object</code></td>
    <td>Basic algorithm for autoscaling. (id: BasicAutoscalingAlgorithm)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the clusters for which this autoscaling policy is to be configured.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryWorkerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes how the autoscaler will operate for secondary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="workerConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Describes how the autoscaler will operate for primary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_regions_autoscaling_policies_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/autoscalingPolicies/&#123;policy_id&#125; For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/autoscalingPolicies/&#123;policy_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="basicAlgorithm" /></td>
    <td><code>object</code></td>
    <td>Basic algorithm for autoscaling. (id: BasicAutoscalingAlgorithm)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the clusters for which this autoscaling policy is to be configured.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryWorkerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes how the autoscaler will operate for secondary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="workerConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Describes how the autoscaler will operate for primary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/regions/&#123;region&#125;/autoscalingPolicies/&#123;policy_id&#125; For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/&#123;project_id&#125;/locations/&#123;location&#125;/autoscalingPolicies/&#123;policy_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="basicAlgorithm" /></td>
    <td><code>object</code></td>
    <td>Basic algorithm for autoscaling. (id: BasicAutoscalingAlgorithm)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the clusters for which this autoscaling policy is to be configured.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryWorkerConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes how the autoscaler will operate for secondary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="workerConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Describes how the autoscaler will operate for primary workers. (id: InstanceGroupAutoscalingPolicyConfig)</td>
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
    <td><a href="#projects_regions_autoscaling_policies_get"><CopyableCode code="projects_regions_autoscaling_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-autoscalingPoliciesId"><code>autoscalingPoliciesId</code></a></td>
    <td></td>
    <td>Retrieves autoscaling policy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_autoscaling_policies_get"><CopyableCode code="projects_locations_autoscaling_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autoscalingPoliciesId"><code>autoscalingPoliciesId</code></a></td>
    <td></td>
    <td>Retrieves autoscaling policy.</td>
</tr>
<tr>
    <td><a href="#projects_regions_autoscaling_policies_list"><CopyableCode code="projects_regions_autoscaling_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists autoscaling policies in the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_autoscaling_policies_list"><CopyableCode code="projects_locations_autoscaling_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists autoscaling policies in the project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_autoscaling_policies_create"><CopyableCode code="projects_regions_autoscaling_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a></td>
    <td></td>
    <td>Creates new autoscaling policy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_autoscaling_policies_create"><CopyableCode code="projects_locations_autoscaling_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new autoscaling policy.</td>
</tr>
<tr>
    <td><a href="#projects_regions_autoscaling_policies_update"><CopyableCode code="projects_regions_autoscaling_policies_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-autoscalingPoliciesId"><code>autoscalingPoliciesId</code></a></td>
    <td></td>
    <td>Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.</td>
</tr>
<tr>
    <td><a href="#projects_locations_autoscaling_policies_update"><CopyableCode code="projects_locations_autoscaling_policies_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autoscalingPoliciesId"><code>autoscalingPoliciesId</code></a></td>
    <td></td>
    <td>Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.</td>
</tr>
<tr>
    <td><a href="#projects_regions_autoscaling_policies_delete"><CopyableCode code="projects_regions_autoscaling_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-autoscalingPoliciesId"><code>autoscalingPoliciesId</code></a></td>
    <td></td>
    <td>Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.</td>
</tr>
<tr>
    <td><a href="#projects_locations_autoscaling_policies_delete"><CopyableCode code="projects_locations_autoscaling_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autoscalingPoliciesId"><code>autoscalingPoliciesId</code></a></td>
    <td></td>
    <td>Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.</td>
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
<tr id="parameter-autoscalingPoliciesId">
    <td><CopyableCode code="autoscalingPoliciesId" /></td>
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
<tr id="parameter-regionsId">
    <td><CopyableCode code="regionsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_regions_autoscaling_policies_get"
    values={[
        { label: 'projects_regions_autoscaling_policies_get', value: 'projects_regions_autoscaling_policies_get' },
        { label: 'projects_locations_autoscaling_policies_get', value: 'projects_locations_autoscaling_policies_get' },
        { label: 'projects_regions_autoscaling_policies_list', value: 'projects_regions_autoscaling_policies_list' },
        { label: 'projects_locations_autoscaling_policies_list', value: 'projects_locations_autoscaling_policies_list' }
    ]}
>
<TabItem value="projects_regions_autoscaling_policies_get">

Retrieves autoscaling policy.

```sql
SELECT
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig
FROM google.dataproc.autoscaling_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND regionsId = '{{ regionsId }}' -- required
AND autoscalingPoliciesId = '{{ autoscalingPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_get">

Retrieves autoscaling policy.

```sql
SELECT
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig
FROM google.dataproc.autoscaling_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND autoscalingPoliciesId = '{{ autoscalingPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="projects_regions_autoscaling_policies_list">

Lists autoscaling policies in the project.

```sql
SELECT
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig
FROM google.dataproc.autoscaling_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND regionsId = '{{ regionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_list">

Lists autoscaling policies in the project.

```sql
SELECT
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig
FROM google.dataproc.autoscaling_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_regions_autoscaling_policies_create"
    values={[
        { label: 'projects_regions_autoscaling_policies_create', value: 'projects_regions_autoscaling_policies_create' },
        { label: 'projects_locations_autoscaling_policies_create', value: 'projects_locations_autoscaling_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_regions_autoscaling_policies_create">

Creates new autoscaling policy.

```sql
INSERT INTO google.dataproc.autoscaling_policies (
data__id,
data__basicAlgorithm,
data__workerConfig,
data__secondaryWorkerConfig,
data__labels,
data__clusterType,
projectsId,
regionsId
)
SELECT 
'{{ id }}',
'{{ basicAlgorithm }}',
'{{ workerConfig }}',
'{{ secondaryWorkerConfig }}',
'{{ labels }}',
'{{ clusterType }}',
'{{ projectsId }}',
'{{ regionsId }}'
RETURNING
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig
;
```
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_create">

Creates new autoscaling policy.

```sql
INSERT INTO google.dataproc.autoscaling_policies (
data__id,
data__basicAlgorithm,
data__workerConfig,
data__secondaryWorkerConfig,
data__labels,
data__clusterType,
projectsId,
locationsId
)
SELECT 
'{{ id }}',
'{{ basicAlgorithm }}',
'{{ workerConfig }}',
'{{ secondaryWorkerConfig }}',
'{{ labels }}',
'{{ clusterType }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: autoscaling_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the autoscaling_policies resource.
    - name: regionsId
      value: string
      description: Required parameter for the autoscaling_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the autoscaling_policies resource.
    - name: id
      value: string
      description: >
        Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
        
    - name: basicAlgorithm
      value: object
      description: >
        Basic algorithm for autoscaling.
        
    - name: workerConfig
      value: object
      description: >
        Required. Describes how the autoscaler will operate for primary workers.
        
    - name: secondaryWorkerConfig
      value: object
      description: >
        Optional. Describes how the autoscaler will operate for secondary workers.
        
    - name: labels
      value: object
      description: >
        Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.
        
    - name: clusterType
      value: string
      description: >
        Optional. The type of the clusters for which this autoscaling policy is to be configured.
        
      valid_values: ['CLUSTER_TYPE_UNSPECIFIED', 'STANDARD', 'ZERO_SCALE']
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_regions_autoscaling_policies_update"
    values={[
        { label: 'projects_regions_autoscaling_policies_update', value: 'projects_regions_autoscaling_policies_update' },
        { label: 'projects_locations_autoscaling_policies_update', value: 'projects_locations_autoscaling_policies_update' }
    ]}
>
<TabItem value="projects_regions_autoscaling_policies_update">

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

```sql
REPLACE google.dataproc.autoscaling_policies
SET 
data__id = '{{ id }}',
data__basicAlgorithm = '{{ basicAlgorithm }}',
data__workerConfig = '{{ workerConfig }}',
data__secondaryWorkerConfig = '{{ secondaryWorkerConfig }}',
data__labels = '{{ labels }}',
data__clusterType = '{{ clusterType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND regionsId = '{{ regionsId }}' --required
AND autoscalingPoliciesId = '{{ autoscalingPoliciesId }}' --required
RETURNING
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig;
```
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_update">

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

```sql
REPLACE google.dataproc.autoscaling_policies
SET 
data__id = '{{ id }}',
data__basicAlgorithm = '{{ basicAlgorithm }}',
data__workerConfig = '{{ workerConfig }}',
data__secondaryWorkerConfig = '{{ secondaryWorkerConfig }}',
data__labels = '{{ labels }}',
data__clusterType = '{{ clusterType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND autoscalingPoliciesId = '{{ autoscalingPoliciesId }}' --required
RETURNING
id,
name,
basicAlgorithm,
clusterType,
labels,
secondaryWorkerConfig,
workerConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_regions_autoscaling_policies_delete"
    values={[
        { label: 'projects_regions_autoscaling_policies_delete', value: 'projects_regions_autoscaling_policies_delete' },
        { label: 'projects_locations_autoscaling_policies_delete', value: 'projects_locations_autoscaling_policies_delete' }
    ]}
>
<TabItem value="projects_regions_autoscaling_policies_delete">

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

```sql
DELETE FROM google.dataproc.autoscaling_policies
WHERE projectsId = '{{ projectsId }}' --required
AND regionsId = '{{ regionsId }}' --required
AND autoscalingPoliciesId = '{{ autoscalingPoliciesId }}' --required;
```
</TabItem>
<TabItem value="projects_locations_autoscaling_policies_delete">

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

```sql
DELETE FROM google.dataproc.autoscaling_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND autoscalingPoliciesId = '{{ autoscalingPoliciesId }}' --required;
```
</TabItem>
</Tabs>
