--- 
title: intercept_deployment_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - intercept_deployment_groups
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

Creates, updates, deletes, gets or lists an <code>intercept_deployment_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>intercept_deployment_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.intercept_deployment_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_intercept_deployment_groups_get"
    values={[
        { label: 'projects_locations_intercept_deployment_groups_get', value: 'projects_locations_intercept_deployment_groups_get' },
        { label: 'projects_locations_intercept_deployment_groups_list', value: 'projects_locations_intercept_deployment_groups_list' }
    ]}
>
<TabItem value="projects_locations_intercept_deployment_groups_get">

A deployment group aggregates many zonal intercept backends (deployments) into a single global intercept service. Consumers can connect this service using an endpoint group.

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
    <td>Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="connectedEndpointGroups" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of endpoint groups that are connected to this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the deployment group. Used as additional context for the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are key/value pairs that help to organize and filter resources.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of locations where the deployment group is present.</td>
</tr>
<tr>
    <td><CopyableCode code="nestedDeployments" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of Intercept Deployments that belong to this group.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The network that will be used for all child deployments, for example: `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new deployment to the group) See https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the deployment group. See https://google.aip.dev/216.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_intercept_deployment_groups_list">

Response message for ListInterceptDeploymentGroups.

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
    <td><CopyableCode code="interceptDeploymentGroups" /></td>
    <td><code>array</code></td>
    <td>The deployment groups from the specified parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details.</td>
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
    <td><a href="#projects_locations_intercept_deployment_groups_get"><CopyableCode code="projects_locations_intercept_deployment_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-interceptDeploymentGroupsId"><code>interceptDeploymentGroupsId</code></a></td>
    <td></td>
    <td>Gets a specific deployment group. See https://google.aip.dev/131.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_deployment_groups_list"><CopyableCode code="projects_locations_intercept_deployment_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists deployment groups in a given project and location. See https://google.aip.dev/132.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_deployment_groups_create"><CopyableCode code="projects_locations_intercept_deployment_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-interceptDeploymentGroupId"><code>interceptDeploymentGroupId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a deployment group in a given project and location. See https://google.aip.dev/133.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_deployment_groups_patch"><CopyableCode code="projects_locations_intercept_deployment_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-interceptDeploymentGroupsId"><code>interceptDeploymentGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a deployment group. See https://google.aip.dev/134.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_deployment_groups_delete"><CopyableCode code="projects_locations_intercept_deployment_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-interceptDeploymentGroupsId"><code>interceptDeploymentGroupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a deployment group. See https://google.aip.dev/135.</td>
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
<tr id="parameter-interceptDeploymentGroupsId">
    <td><CopyableCode code="interceptDeploymentGroupsId" /></td>
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
<tr id="parameter-interceptDeploymentGroupId">
    <td><CopyableCode code="interceptDeploymentGroupId" /></td>
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
    defaultValue="projects_locations_intercept_deployment_groups_get"
    values={[
        { label: 'projects_locations_intercept_deployment_groups_get', value: 'projects_locations_intercept_deployment_groups_get' },
        { label: 'projects_locations_intercept_deployment_groups_list', value: 'projects_locations_intercept_deployment_groups_list' }
    ]}
>
<TabItem value="projects_locations_intercept_deployment_groups_get">

Gets a specific deployment group. See https://google.aip.dev/131.

```sql
SELECT
name,
connectedEndpointGroups,
createTime,
description,
labels,
locations,
nestedDeployments,
network,
reconciling,
state,
updateTime
FROM google.networksecurity.intercept_deployment_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND interceptDeploymentGroupsId = '{{ interceptDeploymentGroupsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_intercept_deployment_groups_list">

Lists deployment groups in a given project and location. See https://google.aip.dev/132.

```sql
SELECT
interceptDeploymentGroups,
nextPageToken
FROM google.networksecurity.intercept_deployment_groups
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
    defaultValue="projects_locations_intercept_deployment_groups_create"
    values={[
        { label: 'projects_locations_intercept_deployment_groups_create', value: 'projects_locations_intercept_deployment_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_intercept_deployment_groups_create">

Creates a deployment group in a given project and location. See https://google.aip.dev/133.

```sql
INSERT INTO google.networksecurity.intercept_deployment_groups (
data__name,
data__labels,
data__network,
data__description,
projectsId,
locationsId,
interceptDeploymentGroupId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ network }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ interceptDeploymentGroupId }}',
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
- name: intercept_deployment_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the intercept_deployment_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the intercept_deployment_groups resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details.
        
    - name: labels
      value: object
      description: >
        Optional. Labels are key/value pairs that help to organize and filter resources.
        
    - name: network
      value: string
      description: >
        Required. Immutable. The network that will be used for all child deployments, for example: `projects/{project}/global/networks/{network}`. See https://google.aip.dev/124.
        
    - name: description
      value: string
      description: >
        Optional. User-provided description of the deployment group. Used as additional context for the deployment group.
        
    - name: interceptDeploymentGroupId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_intercept_deployment_groups_patch"
    values={[
        { label: 'projects_locations_intercept_deployment_groups_patch', value: 'projects_locations_intercept_deployment_groups_patch' }
    ]}
>
<TabItem value="projects_locations_intercept_deployment_groups_patch">

Updates a deployment group. See https://google.aip.dev/134.

```sql
UPDATE google.networksecurity.intercept_deployment_groups
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__network = '{{ network }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND interceptDeploymentGroupsId = '{{ interceptDeploymentGroupsId }}' --required
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
    defaultValue="projects_locations_intercept_deployment_groups_delete"
    values={[
        { label: 'projects_locations_intercept_deployment_groups_delete', value: 'projects_locations_intercept_deployment_groups_delete' }
    ]}
>
<TabItem value="projects_locations_intercept_deployment_groups_delete">

Deletes a deployment group. See https://google.aip.dev/135.

```sql
DELETE FROM google.networksecurity.intercept_deployment_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND interceptDeploymentGroupsId = '{{ interceptDeploymentGroupsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
