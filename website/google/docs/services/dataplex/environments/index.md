--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - dataplex
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_environments_get"
    values={[
        { label: 'projects_locations_lakes_environments_get', value: 'projects_locations_lakes_environments_get' },
        { label: 'projects_locations_lakes_environments_list', value: 'projects_locations_lakes_environments_list' }
    ]}
>
<TabItem value="projects_locations_lakes_environments_get">

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
    <td>Output only. The relative resource name of the environment, of the form: projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/environment/&#123;environment_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Environment creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>Output only. URI Endpoints to access sessions associated with the Environment. (id: GoogleCloudDataplexV1EnvironmentEndpoints)</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Infrastructure specification for the Environment. (id: GoogleCloudDataplexV1EnvironmentInfrastructureSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for sessions created for this environment. (id: GoogleCloudDataplexV1EnvironmentSessionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of sessions created for this environment. (id: GoogleCloudDataplexV1EnvironmentSessionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the environment was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_environments_list">

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
    <td>Output only. The relative resource name of the environment, of the form: projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/environment/&#123;environment_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Environment creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>Output only. URI Endpoints to access sessions associated with the Environment. (id: GoogleCloudDataplexV1EnvironmentEndpoints)</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Infrastructure specification for the Environment. (id: GoogleCloudDataplexV1EnvironmentInfrastructureSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for sessions created for this environment. (id: GoogleCloudDataplexV1EnvironmentSessionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of sessions created for this environment. (id: GoogleCloudDataplexV1EnvironmentSessionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the environment was last updated.</td>
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
    <td><a href="#projects_locations_lakes_environments_get"><CopyableCode code="projects_locations_lakes_environments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Get environment resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_environments_list"><CopyableCode code="projects_locations_lakes_environments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists environments under the given lake.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_environments_create"><CopyableCode code="projects_locations_lakes_environments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a></td>
    <td><a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create an environment resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_environments_patch"><CopyableCode code="projects_locations_lakes_environments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update the environment resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_environments_delete"><CopyableCode code="projects_locations_lakes_environments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Delete the environment resource. All the child resources must have been deleted before environment deletion can be initiated.</td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-lakesId">
    <td><CopyableCode code="lakesId" /></td>
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
<tr id="parameter-environmentId">
    <td><CopyableCode code="environmentId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_lakes_environments_get"
    values={[
        { label: 'projects_locations_lakes_environments_get', value: 'projects_locations_lakes_environments_get' },
        { label: 'projects_locations_lakes_environments_list', value: 'projects_locations_lakes_environments_list' }
    ]}
>
<TabItem value="projects_locations_lakes_environments_get">

Get environment resource.

```sql
SELECT
name,
createTime,
description,
displayName,
endpoints,
infrastructureSpec,
labels,
sessionSpec,
sessionStatus,
state,
uid,
updateTime
FROM google.dataplex.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_lakes_environments_list">

Lists environments under the given lake.

```sql
SELECT
name,
createTime,
description,
displayName,
endpoints,
infrastructureSpec,
labels,
sessionSpec,
sessionStatus,
state,
uid,
updateTime
FROM google.dataplex.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_lakes_environments_create"
    values={[
        { label: 'projects_locations_lakes_environments_create', value: 'projects_locations_lakes_environments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_environments_create">

Create an environment resource.

```sql
INSERT INTO google.dataplex.environments (
data__displayName,
data__labels,
data__description,
data__infrastructureSpec,
data__sessionSpec,
projectsId,
locationsId,
lakesId,
environmentId,
validateOnly
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ description }}',
'{{ infrastructureSpec }}',
'{{ sessionSpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ environmentId }}',
'{{ validateOnly }}'
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
- name: environments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the environments resource.
    - name: locationsId
      value: string
      description: Required parameter for the environments resource.
    - name: lakesId
      value: string
      description: Required parameter for the environments resource.
    - name: displayName
      value: string
      description: >
        Optional. User friendly display name.
        
    - name: labels
      value: object
      description: >
        Optional. User defined labels for the environment.
        
    - name: description
      value: string
      description: >
        Optional. Description of the environment.
        
    - name: infrastructureSpec
      value: object
      description: >
        Required. Infrastructure specification for the Environment.
        
    - name: sessionSpec
      value: object
      description: >
        Optional. Configuration for sessions created for this environment.
        
    - name: environmentId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_lakes_environments_patch"
    values={[
        { label: 'projects_locations_lakes_environments_patch', value: 'projects_locations_lakes_environments_patch' }
    ]}
>
<TabItem value="projects_locations_lakes_environments_patch">

Update the environment resource.

```sql
UPDATE google.dataplex.environments
SET 
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__infrastructureSpec = '{{ infrastructureSpec }}',
data__sessionSpec = '{{ sessionSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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
    defaultValue="projects_locations_lakes_environments_delete"
    values={[
        { label: 'projects_locations_lakes_environments_delete', value: 'projects_locations_lakes_environments_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_environments_delete">

Delete the environment resource. All the child resources must have been deleted before environment deletion can be initiated.

```sql
DELETE FROM google.dataplex.environments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND environmentsId = '{{ environmentsId }}' --required;
```
</TabItem>
</Tabs>
