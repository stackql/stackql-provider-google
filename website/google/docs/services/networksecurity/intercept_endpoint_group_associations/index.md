--- 
title: intercept_endpoint_group_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - intercept_endpoint_group_associations
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

Creates, updates, deletes, gets or lists an <code>intercept_endpoint_group_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>intercept_endpoint_group_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.intercept_endpoint_group_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_intercept_endpoint_group_associations_get"
    values={[
        { label: 'projects_locations_intercept_endpoint_group_associations_get', value: 'projects_locations_intercept_endpoint_group_associations_get' },
        { label: 'projects_locations_intercept_endpoint_group_associations_list', value: 'projects_locations_intercept_endpoint_group_associations_list' }
    ]}
>
<TabItem value="projects_locations_intercept_endpoint_group_associations_get">

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
    <td>Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="interceptEndpointGroup" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are key/value pairs that help to organize and filter resources.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of locations where the association is configured. This information is retrieved from the linked endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="locationsDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of locations where the association is present. This information is retrieved from the linked endpoint group, and not configured as part of the association itself.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. adding a new location to the target deployment group). See https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the endpoint group association.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_intercept_endpoint_group_associations_list">

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
    <td>Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="interceptEndpointGroup" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are key/value pairs that help to organize and filter resources.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of locations where the association is configured. This information is retrieved from the linked endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="locationsDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of locations where the association is present. This information is retrieved from the linked endpoint group, and not configured as part of the association itself.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. adding a new location to the target deployment group). See https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the endpoint group association.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps.</td>
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
    <td><a href="#projects_locations_intercept_endpoint_group_associations_get"><CopyableCode code="projects_locations_intercept_endpoint_group_associations_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-interceptEndpointGroupAssociationsId"><code>interceptEndpointGroupAssociationsId</code></a></td>
    <td></td>
    <td>Gets a specific association. See https://google.aip.dev/131.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_endpoint_group_associations_list"><CopyableCode code="projects_locations_intercept_endpoint_group_associations_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists associations in a given project and location. See https://google.aip.dev/132.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_endpoint_group_associations_create"><CopyableCode code="projects_locations_intercept_endpoint_group_associations_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-interceptEndpointGroupAssociationId"><code>interceptEndpointGroupAssociationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an association in a given project and location. See https://google.aip.dev/133.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_endpoint_group_associations_patch"><CopyableCode code="projects_locations_intercept_endpoint_group_associations_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-interceptEndpointGroupAssociationsId"><code>interceptEndpointGroupAssociationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates an association. See https://google.aip.dev/134.</td>
</tr>
<tr>
    <td><a href="#projects_locations_intercept_endpoint_group_associations_delete"><CopyableCode code="projects_locations_intercept_endpoint_group_associations_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-interceptEndpointGroupAssociationsId"><code>interceptEndpointGroupAssociationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes an association. See https://google.aip.dev/135.</td>
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
<tr id="parameter-interceptEndpointGroupAssociationsId">
    <td><CopyableCode code="interceptEndpointGroupAssociationsId" /></td>
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
<tr id="parameter-interceptEndpointGroupAssociationId">
    <td><CopyableCode code="interceptEndpointGroupAssociationId" /></td>
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
    defaultValue="projects_locations_intercept_endpoint_group_associations_get"
    values={[
        { label: 'projects_locations_intercept_endpoint_group_associations_get', value: 'projects_locations_intercept_endpoint_group_associations_get' },
        { label: 'projects_locations_intercept_endpoint_group_associations_list', value: 'projects_locations_intercept_endpoint_group_associations_list' }
    ]}
>
<TabItem value="projects_locations_intercept_endpoint_group_associations_get">

Gets a specific association. See https://google.aip.dev/131.

```sql
SELECT
name,
createTime,
interceptEndpointGroup,
labels,
locations,
locationsDetails,
network,
reconciling,
state,
updateTime
FROM google.networksecurity.intercept_endpoint_group_associations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND interceptEndpointGroupAssociationsId = '{{ interceptEndpointGroupAssociationsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_intercept_endpoint_group_associations_list">

Lists associations in a given project and location. See https://google.aip.dev/132.

```sql
SELECT
name,
createTime,
interceptEndpointGroup,
labels,
locations,
locationsDetails,
network,
reconciling,
state,
updateTime
FROM google.networksecurity.intercept_endpoint_group_associations
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
    defaultValue="projects_locations_intercept_endpoint_group_associations_create"
    values={[
        { label: 'projects_locations_intercept_endpoint_group_associations_create', value: 'projects_locations_intercept_endpoint_group_associations_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_intercept_endpoint_group_associations_create">

Creates an association in a given project and location. See https://google.aip.dev/133.

```sql
INSERT INTO google.networksecurity.intercept_endpoint_group_associations (
data__name,
data__labels,
data__interceptEndpointGroup,
data__network,
projectsId,
locationsId,
interceptEndpointGroupAssociationId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ interceptEndpointGroup }}',
'{{ network }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ interceptEndpointGroupAssociationId }}',
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
- name: intercept_endpoint_group_associations
  props:
    - name: projectsId
      value: string
      description: Required parameter for the intercept_endpoint_group_associations resource.
    - name: locationsId
      value: string
      description: Required parameter for the intercept_endpoint_group_associations resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details.
        
    - name: labels
      value: object
      description: >
        Optional. Labels are key/value pairs that help to organize and filter resources.
        
    - name: interceptEndpointGroup
      value: string
      description: >
        Required. Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124.
        
    - name: network
      value: string
      description: >
        Required. Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124.
        
    - name: interceptEndpointGroupAssociationId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_intercept_endpoint_group_associations_patch"
    values={[
        { label: 'projects_locations_intercept_endpoint_group_associations_patch', value: 'projects_locations_intercept_endpoint_group_associations_patch' }
    ]}
>
<TabItem value="projects_locations_intercept_endpoint_group_associations_patch">

Updates an association. See https://google.aip.dev/134.

```sql
UPDATE google.networksecurity.intercept_endpoint_group_associations
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__interceptEndpointGroup = '{{ interceptEndpointGroup }}',
data__network = '{{ network }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND interceptEndpointGroupAssociationsId = '{{ interceptEndpointGroupAssociationsId }}' --required
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
    defaultValue="projects_locations_intercept_endpoint_group_associations_delete"
    values={[
        { label: 'projects_locations_intercept_endpoint_group_associations_delete', value: 'projects_locations_intercept_endpoint_group_associations_delete' }
    ]}
>
<TabItem value="projects_locations_intercept_endpoint_group_associations_delete">

Deletes an association. See https://google.aip.dev/135.

```sql
DELETE FROM google.networksecurity.intercept_endpoint_group_associations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND interceptEndpointGroupAssociationsId = '{{ interceptEndpointGroupAssociationsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
