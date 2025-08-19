--- 
title: features
hide_title: false
hide_table_of_contents: false
keywords:
  - features
  - gkehub
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

Creates, updates, deletes, gets or lists a <code>features</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>features</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkehub.features" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_memberships_features_get"
    values={[
        { label: 'projects_locations_memberships_features_get', value: 'projects_locations_memberships_features_get' },
        { label: 'projects_locations_memberships_features_list', value: 'projects_locations_memberships_features_list' }
    ]}
>
<TabItem value="projects_locations_memberships_features_get">

MembershipFeature represents the settings and status of a Fleet Feature enabled on a single Fleet Membership.

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
    <td>Output only. The resource name of the membershipFeature, in the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/memberships/&#123;membership&#125;/features/&#123;feature&#125;`. Note that `membershipFeatures` is shortened to `features` in the resource name. (see http://go/aip/122#collection-identifiers)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the MembershipFeature resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the MembershipFeature resource was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>GCP labels for this MembershipFeature.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>object</code></td>
    <td>Output only. Lifecycle information of the resource itself. (id: LifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. Spec of this membershipFeature. (id: FeatureSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Output only. State of the this membershipFeature. (id: FeatureState)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the MembershipFeature resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_memberships_features_list">

Response message for the `GkeHubFeature.ListMembershipFeatures` method.

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
    <td><CopyableCode code="membershipFeatures" /></td>
    <td><code>array</code></td>
    <td>The list of matching MembershipFeatures.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to request the next page of resources from the `ListMembershipFeatures` method. The value of an empty string means that there are no more resources to return.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>List of locations that could not be reached while fetching this list.</td>
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
    <td><a href="#projects_locations_memberships_features_get"><CopyableCode code="projects_locations_memberships_features_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a>, <a href="#parameter-featuresId"><code>featuresId</code></a></td>
    <td></td>
    <td>========= MembershipFeature Services ========= Gets details of a membershipFeature.</td>
</tr>
<tr>
    <td><a href="#projects_locations_memberships_features_list"><CopyableCode code="projects_locations_memberships_features_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists MembershipFeatures in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_memberships_features_create"><CopyableCode code="projects_locations_memberships_features_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-featureId"><code>featureId</code></a></td>
    <td>Creates membershipFeature under a given parent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_memberships_features_patch"><CopyableCode code="projects_locations_memberships_features_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a>, <a href="#parameter-featuresId"><code>featuresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates an existing MembershipFeature.</td>
</tr>
<tr>
    <td><a href="#projects_locations_memberships_features_delete"><CopyableCode code="projects_locations_memberships_features_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-membershipsId"><code>membershipsId</code></a>, <a href="#parameter-featuresId"><code>featuresId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Removes a membershipFeature.</td>
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
<tr id="parameter-featuresId">
    <td><CopyableCode code="featuresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-membershipsId">
    <td><CopyableCode code="membershipsId" /></td>
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
<tr id="parameter-featureId">
    <td><CopyableCode code="featureId" /></td>
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
    defaultValue="projects_locations_memberships_features_get"
    values={[
        { label: 'projects_locations_memberships_features_get', value: 'projects_locations_memberships_features_get' },
        { label: 'projects_locations_memberships_features_list', value: 'projects_locations_memberships_features_list' }
    ]}
>
<TabItem value="projects_locations_memberships_features_get">

========= MembershipFeature Services ========= Gets details of a membershipFeature.

```sql
SELECT
name,
createTime,
deleteTime,
labels,
lifecycleState,
spec,
state,
updateTime
FROM google.gkehub.features
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND membershipsId = '{{ membershipsId }}' -- required
AND featuresId = '{{ featuresId }}' -- required;
```
</TabItem>
<TabItem value="projects_locations_memberships_features_list">

Lists MembershipFeatures in a given project and location.

```sql
SELECT
membershipFeatures,
nextPageToken,
unreachable
FROM google.gkehub.features
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND membershipsId = '{{ membershipsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_memberships_features_create"
    values={[
        { label: 'projects_locations_memberships_features_create', value: 'projects_locations_memberships_features_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_memberships_features_create">

Creates membershipFeature under a given parent.

```sql
INSERT INTO google.gkehub.features (
data__labels,
data__spec,
projectsId,
locationsId,
membershipsId,
requestId,
featureId
)
SELECT 
'{{ labels }}',
'{{ spec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ membershipsId }}',
'{{ requestId }}',
'{{ featureId }}'
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
- name: features
  props:
    - name: projectsId
      value: string
      description: Required parameter for the features resource.
    - name: locationsId
      value: string
      description: Required parameter for the features resource.
    - name: membershipsId
      value: string
      description: Required parameter for the features resource.
    - name: labels
      value: object
      description: >
        GCP labels for this MembershipFeature.
        
    - name: spec
      value: object
      description: >
        Optional. Spec of this membershipFeature.
        
    - name: requestId
      value: string
    - name: featureId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_memberships_features_patch"
    values={[
        { label: 'projects_locations_memberships_features_patch', value: 'projects_locations_memberships_features_patch' }
    ]}
>
<TabItem value="projects_locations_memberships_features_patch">

Updates an existing MembershipFeature.

```sql
UPDATE google.gkehub.features
SET 
data__labels = '{{ labels }}',
data__spec = '{{ spec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND membershipsId = '{{ membershipsId }}' --required
AND featuresId = '{{ featuresId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND allowMissing = {{ allowMissing}}
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
    defaultValue="projects_locations_memberships_features_delete"
    values={[
        { label: 'projects_locations_memberships_features_delete', value: 'projects_locations_memberships_features_delete' }
    ]}
>
<TabItem value="projects_locations_memberships_features_delete">

Removes a membershipFeature.

```sql
DELETE FROM google.gkehub.features
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND membershipsId = '{{ membershipsId }}' --required
AND featuresId = '{{ featuresId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
