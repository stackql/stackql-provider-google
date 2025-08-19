--- 
title: mirroring_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - mirroring_deployments
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

Creates, updates, deletes, gets or lists a <code>mirroring_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>mirroring_deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.mirroring_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_mirroring_deployments_get"
    values={[
        { label: 'projects_locations_mirroring_deployments_get', value: 'projects_locations_mirroring_deployments_get' },
        { label: 'projects_locations_mirroring_deployments_list', value: 'projects_locations_mirroring_deployments_list' }
    ]}
>
<TabItem value="projects_locations_mirroring_deployments_get">

A deployment represents a zonal mirroring backend ready to accept GENEVE-encapsulated replica traffic, e.g. a zonal instance group fronted by an internal passthrough load balancer. Deployments are always part of a global deployment group which represents a global mirroring service.

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
    <td>Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the deployment. Used as additional context for the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardingRule" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The regional forwarding rule that fronts the mirroring collectors, for example: `projects/123456789/regions/us-central1/forwardingRules/my-rule`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are key/value pairs that help to organize and filter resources.</td>
</tr>
<tr>
    <td><CopyableCode code="mirroringDeploymentGroup" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The deployment group that this deployment is a part of, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. linking a new association to the parent group). See https://google.aip.dev/128.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the deployment. See https://google.aip.dev/216.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_mirroring_deployments_list">

Response message for ListMirroringDeployments.

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
    <td><CopyableCode code="mirroringDeployments" /></td>
    <td><code>array</code></td>
    <td>The deployments from the specified parent.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details.</td>
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
    <td><a href="#projects_locations_mirroring_deployments_get"><CopyableCode code="projects_locations_mirroring_deployments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-mirroringDeploymentsId"><code>mirroringDeploymentsId</code></a></td>
    <td></td>
    <td>Gets a specific deployment. See https://google.aip.dev/131.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_deployments_list"><CopyableCode code="projects_locations_mirroring_deployments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists deployments in a given project and location. See https://google.aip.dev/132.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_deployments_create"><CopyableCode code="projects_locations_mirroring_deployments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-mirroringDeploymentId"><code>mirroringDeploymentId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a deployment in a given project and location. See https://google.aip.dev/133.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_deployments_patch"><CopyableCode code="projects_locations_mirroring_deployments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-mirroringDeploymentsId"><code>mirroringDeploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a deployment. See https://google.aip.dev/134.</td>
</tr>
<tr>
    <td><a href="#projects_locations_mirroring_deployments_delete"><CopyableCode code="projects_locations_mirroring_deployments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-mirroringDeploymentsId"><code>mirroringDeploymentsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a deployment. See https://google.aip.dev/135.</td>
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
<tr id="parameter-mirroringDeploymentsId">
    <td><CopyableCode code="mirroringDeploymentsId" /></td>
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
<tr id="parameter-mirroringDeploymentId">
    <td><CopyableCode code="mirroringDeploymentId" /></td>
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
    defaultValue="projects_locations_mirroring_deployments_get"
    values={[
        { label: 'projects_locations_mirroring_deployments_get', value: 'projects_locations_mirroring_deployments_get' },
        { label: 'projects_locations_mirroring_deployments_list', value: 'projects_locations_mirroring_deployments_list' }
    ]}
>
<TabItem value="projects_locations_mirroring_deployments_get">

Gets a specific deployment. See https://google.aip.dev/131.

```sql
SELECT
name,
createTime,
description,
forwardingRule,
labels,
mirroringDeploymentGroup,
reconciling,
state,
updateTime
FROM google.networksecurity.mirroring_deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND mirroringDeploymentsId = '{{ mirroringDeploymentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_mirroring_deployments_list">

Lists deployments in a given project and location. See https://google.aip.dev/132.

```sql
SELECT
mirroringDeployments,
nextPageToken,
unreachable
FROM google.networksecurity.mirroring_deployments
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
    defaultValue="projects_locations_mirroring_deployments_create"
    values={[
        { label: 'projects_locations_mirroring_deployments_create', value: 'projects_locations_mirroring_deployments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_mirroring_deployments_create">

Creates a deployment in a given project and location. See https://google.aip.dev/133.

```sql
INSERT INTO google.networksecurity.mirroring_deployments (
data__name,
data__labels,
data__forwardingRule,
data__mirroringDeploymentGroup,
data__description,
projectsId,
locationsId,
mirroringDeploymentId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ forwardingRule }}',
'{{ mirroringDeploymentGroup }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ mirroringDeploymentId }}',
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
- name: mirroring_deployments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the mirroring_deployments resource.
    - name: locationsId
      value: string
      description: Required parameter for the mirroring_deployments resource.
    - name: name
      value: string
      description: >
        Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details.
        
    - name: labels
      value: object
      description: >
        Optional. Labels are key/value pairs that help to organize and filter resources.
        
    - name: forwardingRule
      value: string
      description: >
        Required. Immutable. The regional forwarding rule that fronts the mirroring collectors, for example: `projects/123456789/regions/us-central1/forwardingRules/my-rule`. See https://google.aip.dev/124.
        
    - name: mirroringDeploymentGroup
      value: string
      description: >
        Required. Immutable. The deployment group that this deployment is a part of, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124.
        
    - name: description
      value: string
      description: >
        Optional. User-provided description of the deployment. Used as additional context for the deployment.
        
    - name: mirroringDeploymentId
      value: string
    - name: requestId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_mirroring_deployments_patch"
    values={[
        { label: 'projects_locations_mirroring_deployments_patch', value: 'projects_locations_mirroring_deployments_patch' }
    ]}
>
<TabItem value="projects_locations_mirroring_deployments_patch">

Updates a deployment. See https://google.aip.dev/134.

```sql
UPDATE google.networksecurity.mirroring_deployments
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__forwardingRule = '{{ forwardingRule }}',
data__mirroringDeploymentGroup = '{{ mirroringDeploymentGroup }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND mirroringDeploymentsId = '{{ mirroringDeploymentsId }}' --required
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
    defaultValue="projects_locations_mirroring_deployments_delete"
    values={[
        { label: 'projects_locations_mirroring_deployments_delete', value: 'projects_locations_mirroring_deployments_delete' }
    ]}
>
<TabItem value="projects_locations_mirroring_deployments_delete">

Deletes a deployment. See https://google.aip.dev/135.

```sql
DELETE FROM google.networksecurity.mirroring_deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND mirroringDeploymentsId = '{{ mirroringDeploymentsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
