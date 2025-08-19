--- 
title: bare_metal_node_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - bare_metal_node_pools
  - gkeonprem
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

Creates, updates, deletes, gets or lists a <code>bare_metal_node_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>bare_metal_node_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkeonprem.bare_metal_node_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_bare_metal_node_pools_get"
    values={[
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_get', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_get' },
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_list', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_list' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_get">

Resource that represents a bare metal node pool.

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
    <td>Immutable. The bare metal node pool resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal node pool was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal node pool was deleted. If the resource is not deleted, this must be empty</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name for the bare metal node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Node pool configuration. (id: BareMetalNodePoolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the bare metal node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the bare metal node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing the detailed node pool status. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the bare metal node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal node pool was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradePolicy" /></td>
    <td><code>object</code></td>
    <td>The worker node pool upgrade policy. (id: BareMetalNodePoolUpgradePolicy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_list">

Response message for listing bare metal node pools.

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
    <td><CopyableCode code="bareMetalNodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools from the specified parent resource.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_get"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a>, <a href="#parameter-bareMetalNodePoolsId"><code>bareMetalNodePoolsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single bare metal node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_list"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists bare metal node pools in a given project, location and bare metal cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_create"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td><a href="#parameter-bareMetalNodePoolId"><code>bareMetalNodePoolId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new bare metal node pool in a given project, location and Bare Metal cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_patch"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a>, <a href="#parameter-bareMetalNodePoolsId"><code>bareMetalNodePoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single bare metal node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_delete"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a>, <a href="#parameter-bareMetalNodePoolsId"><code>bareMetalNodePoolsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-ignoreErrors"><code>ignoreErrors</code></a></td>
    <td>Deletes a single bare metal node pool.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a></td>
    <td></td>
    <td>Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_clusters_bare_metal_node_pools_unenroll"><CopyableCode code="projects_locations_bare_metal_clusters_bare_metal_node_pools_unenroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalClustersId"><code>bareMetalClustersId</code></a>, <a href="#parameter-bareMetalNodePoolsId"><code>bareMetalNodePoolsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Unenrolls a bare metal node pool from Anthos On-Prem API.</td>
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
<tr id="parameter-bareMetalClustersId">
    <td><CopyableCode code="bareMetalClustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bareMetalNodePoolsId">
    <td><CopyableCode code="bareMetalNodePoolsId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-bareMetalNodePoolId">
    <td><CopyableCode code="bareMetalNodePoolId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreErrors">
    <td><CopyableCode code="ignoreErrors" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_bare_metal_node_pools_get"
    values={[
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_get', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_get' },
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_list', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_list' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_get">

Gets details of a single bare metal node pool.

```sql
SELECT
name,
annotations,
createTime,
deleteTime,
displayName,
etag,
nodePoolConfig,
reconciling,
state,
status,
uid,
updateTime,
upgradePolicy
FROM google.gkeonprem.bare_metal_node_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' -- required
AND bareMetalNodePoolsId = '{{ bareMetalNodePoolsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_list">

Lists bare metal node pools in a given project, location and bare metal cluster.

```sql
SELECT
bareMetalNodePools,
nextPageToken,
unreachable
FROM google.gkeonprem.bare_metal_node_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_bare_metal_node_pools_create"
    values={[
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_create', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_create">

Creates a new bare metal node pool in a given project, location and Bare Metal cluster.

```sql
INSERT INTO google.gkeonprem.bare_metal_node_pools (
data__name,
data__displayName,
data__etag,
data__annotations,
data__nodePoolConfig,
data__upgradePolicy,
projectsId,
locationsId,
bareMetalClustersId,
bareMetalNodePoolId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ etag }}',
'{{ annotations }}',
'{{ nodePoolConfig }}',
'{{ upgradePolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bareMetalClustersId }}',
'{{ bareMetalNodePoolId }}',
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
- name: bare_metal_node_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the bare_metal_node_pools resource.
    - name: locationsId
      value: string
      description: Required parameter for the bare_metal_node_pools resource.
    - name: bareMetalClustersId
      value: string
      description: Required parameter for the bare_metal_node_pools resource.
    - name: name
      value: string
      description: >
        Immutable. The bare metal node pool resource name.
        
    - name: displayName
      value: string
      description: >
        The display name for the bare metal node pool.
        
    - name: etag
      value: string
      description: >
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
        
    - name: annotations
      value: object
      description: >
        Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
        
    - name: nodePoolConfig
      value: object
      description: >
        Required. Node pool configuration.
        
    - name: upgradePolicy
      value: object
      description: >
        The worker node pool upgrade policy.
        
    - name: bareMetalNodePoolId
      value: string
    - name: validateOnly
      value: boolean
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_bare_metal_node_pools_patch"
    values={[
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_patch', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_patch' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_patch">

Updates the parameters of a single bare metal node pool.

```sql
UPDATE google.gkeonprem.bare_metal_node_pools
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}',
data__nodePoolConfig = '{{ nodePoolConfig }}',
data__upgradePolicy = '{{ upgradePolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' --required
AND bareMetalNodePoolsId = '{{ bareMetalNodePoolsId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
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
    defaultValue="projects_locations_bare_metal_clusters_bare_metal_node_pools_delete"
    values={[
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_delete', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_delete' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_delete">

Deletes a single bare metal node pool.

```sql
DELETE FROM google.gkeonprem.bare_metal_node_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bareMetalClustersId = '{{ bareMetalClustersId }}' --required
AND bareMetalNodePoolsId = '{{ bareMetalNodePoolsId }}' --required
AND etag = '{{ etag }}'
AND allowMissing = '{{ allowMissing }}'
AND validateOnly = '{{ validateOnly }}'
AND ignoreErrors = '{{ ignoreErrors }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll"
    values={[
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll' },
        { label: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_unenroll', value: 'projects_locations_bare_metal_clusters_bare_metal_node_pools_unenroll' }
    ]}
>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll">

Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.

```sql
EXEC google.gkeonprem.bare_metal_node_pools.projects_locations_bare_metal_clusters_bare_metal_node_pools_enroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bareMetalClustersId='{{ bareMetalClustersId }}' --required 
@@json=
'{
"bareMetalNodePoolId": "{{ bareMetalNodePoolId }}", 
"validateOnly": {{ validateOnly }}
}';
```
</TabItem>
<TabItem value="projects_locations_bare_metal_clusters_bare_metal_node_pools_unenroll">

Unenrolls a bare metal node pool from Anthos On-Prem API.

```sql
EXEC google.gkeonprem.bare_metal_node_pools.projects_locations_bare_metal_clusters_bare_metal_node_pools_unenroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bareMetalClustersId='{{ bareMetalClustersId }}' --required, 
@bareMetalNodePoolsId='{{ bareMetalNodePoolsId }}' --required, 
@etag='{{ etag }}', 
@allowMissing={{ allowMissing }}, 
@validateOnly={{ validateOnly }};
```
</TabItem>
</Tabs>
