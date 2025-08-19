--- 
title: mirroring_endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - mirroring_endpoint_groups
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

Creates, updates, deletes, gets or lists a <code>mirroring_endpoint_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mirroring_endpoint_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.mirroring_endpoint_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_mirroring_endpoint_groups_get"
    values={[
        { label: 'projects_locations_mirroring_endpoint_groups_get', value: 'projects_locations_mirroring_endpoint_groups_get' },
        { label: 'projects_locations_mirroring_endpoint_groups_list', value: 'projects_locations_mirroring_endpoint_groups_list' }
    ]}
>
<TabItem value="projects_locations_mirroring_endpoint_groups_get">

An endpoint group is a consumer frontend for a deployment group (backend). In order to configure mirroring for a network, consumers must create: - An association between their network and the endpoint group. - A security profile that points to the endpoint group. - A mirroring rule that references the security profile (group).

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
    <td>Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="associations" /></td>
    <td><code>array</code></td>
    <td>Output only. List of associations to this endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="connectedDeploymentGroups" /></td>
    <td><code>array</code></td>
    <td>Output only. List of details about the connected deployment groups to this endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the endpoint group. Used as additional context for the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are key/value pairs that help to organize and filter resources.</td>
</tr>
<tr>
    <td><CopyableCode code="mirroringDeploymentGroup" /></td>
    <td><code>string</code></td>
    <td>Immutable. The deployment group that this DIRECT endpoint group is connected to, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new association to the group). See https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the endpoint group. See https://google.aip.dev/216.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_mirroring_endpoint_groups_list">

Response message for ListMirroringEndpointGroups.

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
    <td><CopyableCode code="mirroringEndpointGroups" /></td>
    <td><code>array</code></td>
    <td>The endpoint groups from the specified parent.</td>
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
    <td><a href="#projects_locations_mirroring_endpoint_groups_get"><CopyableCode code="projects_locations_mirroring_endpoint_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-mirroringEndpointGroupsId"><code>mirroringEndpointGroupsId</code></a></td>
    <td></td>
    <td>Gets a specific endpoint group. See https://google.aip.dev/131.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_endpoint_groups_list"><CopyableCode code="projects_locations_mirroring_endpoint_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists endpoint groups in a given project and location. See https://google.aip.dev/132.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_endpoint_groups_create"><CopyableCode code="projects_locations_mirroring_endpoint_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-mirroringEndpointGroupId"><code>mirroringEndpointGroupId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an endpoint group in a given project and location. See https://google.aip.dev/133.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_endpoint_groups_patch"><CopyableCode code="projects_locations_mirroring_endpoint_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-mirroringEndpointGroupsId"><code>mirroringEndpointGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates an endpoint group. See https://google.aip.dev/134.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_endpoint_groups_delete"><CopyableCode code="projects_locations_mirroring_endpoint_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-mirroringEndpointGroupsId"><code>mirroringEndpointGroupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes an endpoint group. See https://google.aip.dev/135.</td>
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
<tr id="parameter-mirroringEndpointGroupsId">
    <td><CopyableCode code="mirroringEndpointGroupsId" /></td>
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
<tr id="parameter-mirroringEndpointGroupId">
    <td><CopyableCode code="mirroringEndpointGroupId" /></td>
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
    defaultValue="projects_locations_mirroring_endpoint_groups_get"
    values={[
        { label: 'projects_locations_mirroring_endpoint_groups_get', value: 'projects_locations_mirroring_endpoint_groups_get' },
        { label: 'projects_locations_mirroring_endpoint_groups_list', value: 'projects_locations_mirroring_endpoint_groups_list' }
    ]}
>
<TabItem value="projects_locations_mirroring_endpoint_groups_get">

Gets a specific endpoint group. See https://google.aip.dev/131.

```sql
SELECT
name,
associations,
connectedDeploymentGroups,
createTime,
description,
labels,
mirroringDeploymentGroup,
reconciling,
state,
updateTime
FROM google.networksecurity.mirroring_endpoint_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND mirroringEndpointGroupsId = '{{ mirroringEndpointGroupsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_mirroring_endpoint_groups_list">

Lists endpoint groups in a given project and location. See https://google.aip.dev/132.

```sql
SELECT
mirroringEndpointGroups,
nextPageToken
FROM google.networksecurity.mirroring_endpoint_groups
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
    defaultValue="projects_locations_mirroring_endpoint_groups_create"
    values={[
        { label: 'projects_locations_mirroring_endpoint_groups_create', value: 'projects_locations_mirroring_endpoint_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_mirroring_endpoint_groups_create">

Creates an endpoint group in a given project and location. See https://google.aip.dev/133.

```sql
INSERT INTO google.networksecurity.mirroring_endpoint_groups (
data__name,
data__labels,
data__mirroringDeploymentGroup,
data__description,
projectsId,
locationsId,
mirroringEndpointGroupId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ mirroringDeploymentGroup }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ mirroringEndpointGroupId }}',
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
- name: mirroring_endpoint_groups
  props:
    - name: projectsId
      value: string
      description: Required parameter for the mirroring_endpoint_groups resource.
    - name: locationsId
      value: string
      description: Required parameter for the mirroring_endpoint_groups resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details.
        
    - name: labels
      value: object
      description: >
        Optional. Labels are key/value pairs that help to organize and filter resources.
        
    - name: mirroringDeploymentGroup
      value: string
      description: >
        Immutable. The deployment group that this DIRECT endpoint group is connected to, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124.
        
    - name: description
      value: string
      description: >
        Optional. User-provided description of the endpoint group. Used as additional context for the endpoint group.
        
    - name: mirroringEndpointGroupId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_mirroring_endpoint_groups_patch"
    values={[
        { label: 'projects_locations_mirroring_endpoint_groups_patch', value: 'projects_locations_mirroring_endpoint_groups_patch' }
    ]}
>
<TabItem value="projects_locations_mirroring_endpoint_groups_patch">

Updates an endpoint group. See https://google.aip.dev/134.

```sql
UPDATE google.networksecurity.mirroring_endpoint_groups
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__mirroringDeploymentGroup = '{{ mirroringDeploymentGroup }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND mirroringEndpointGroupsId = '{{ mirroringEndpointGroupsId }}' --required
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
    defaultValue="projects_locations_mirroring_endpoint_groups_delete"
    values={[
        { label: 'projects_locations_mirroring_endpoint_groups_delete', value: 'projects_locations_mirroring_endpoint_groups_delete' }
    ]}
>
<TabItem value="projects_locations_mirroring_endpoint_groups_delete">

Deletes an endpoint group. See https://google.aip.dev/135.

```sql
DELETE FROM google.networksecurity.mirroring_endpoint_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND mirroringEndpointGroupsId = '{{ mirroringEndpointGroupsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
