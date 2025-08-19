--- 
title: posture_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - posture_deployments
  - securityposture
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

Creates, updates, deletes, gets or lists a <code>posture_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>posture_deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securityposture.posture_deployments" /></td></tr>
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

Details for a Posture deployment on an organization, folder, or project. You can deploy at most one posture to each organization, folder, or project. The parent resource for a posture deployment is always the organization, even if the deployment applies to a folder or project.

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
    <td>Required. Identifier. The name of the posture deployment, in the format `organizations/&#123;organization&#125;/locations/global/postureDeployments/&#123;deployment_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. The user-specified annotations for the posture deployment. For details about the values you can use in an annotation, see [AIP-148: Standard fields](https://google.aip.dev/148#annotations).</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Output only. The categories that the posture deployment belongs to, as determined by the Security Posture API.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the posture deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the posture deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredPostureId" /></td>
    <td><code>string</code></td>
    <td>Output only. The posture ID that was specified for the deployment. Present only if the posture deployment is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredPostureRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The revision ID of the posture that was specified for the deployment. Present only if the deployment is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. An opaque identifier for the current version of the posture deployment. To prevent concurrent updates from overwriting each other, always provide the `etag` when you update a posture deployment. You can also provide the `etag` when you delete a posture deployment, to help ensure that you're deleting the intended posture deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. A description of why the posture deployment failed. Present only if the deployment is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="postureId" /></td>
    <td><code>string</code></td>
    <td>Required. The posture used in the deployment, in the format `organizations/&#123;organization&#125;/locations/global/postures/&#123;posture_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="postureRevisionId" /></td>
    <td><code>string</code></td>
    <td>Required. The revision ID of the posture used in the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the posture deployment is in the process of being updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the posture deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResource" /></td>
    <td><code>string</code></td>
    <td>Required. The organization, folder, or project where the posture is deployed. Uses one of the following formats: * `organizations/&#123;organization_number&#125;` * `folders/&#123;folder_number&#125;` * `projects/&#123;project_number&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the posture deployment was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListPostureDeployments.

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. To retrieve the next page of results, call the method again with this token.</td>
</tr>
<tr>
    <td><CopyableCode code="postureDeployments" /></td>
    <td><code>array</code></td>
    <td>The list of PostureDeployment resources.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Locations that were temporarily unavailable and could not be reached.</td>
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
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-postureDeploymentsId"><code>postureDeploymentsId</code></a></td>
    <td></td>
    <td>Gets details for a PostureDeployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists every PostureDeployment in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-postureDeploymentId"><code>postureDeploymentId</code></a></td>
    <td>Creates a new PostureDeployment in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-postureDeploymentsId"><code>postureDeploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing PostureDeployment. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture deployment: 1. Call GetPostureDeployment to get the current version of the deployment. 2. Update the fields in the deployment as needed. 3. Call UpdatePostureDeployment to update the deployment. Ensure that your request includes the `etag` value from the GetPostureDeployment response. **Important:** If you omit the `etag` when you call UpdatePostureDeployment, then the updated deployment unconditionally overwrites the existing deployment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-postureDeploymentsId"><code>postureDeploymentsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a PostureDeployment.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-postureDeploymentsId">
    <td><CopyableCode code="postureDeploymentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-postureDeploymentId">
    <td><CopyableCode code="postureDeploymentId" /></td>
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

Gets details for a PostureDeployment.

```sql
SELECT
name,
annotations,
categories,
createTime,
description,
desiredPostureId,
desiredPostureRevisionId,
etag,
failureMessage,
postureId,
postureRevisionId,
reconciling,
state,
targetResource,
updateTime
FROM google.securityposture.posture_deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND postureDeploymentsId = '{{ postureDeploymentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists every PostureDeployment in a project and location.

```sql
SELECT
nextPageToken,
postureDeployments,
unreachable
FROM google.securityposture.posture_deployments
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}';
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

Creates a new PostureDeployment in a given project and location.

```sql
INSERT INTO google.securityposture.posture_deployments (
data__name,
data__targetResource,
data__postureId,
data__postureRevisionId,
data__description,
data__etag,
data__annotations,
organizationsId,
locationsId,
postureDeploymentId
)
SELECT 
'{{ name }}',
'{{ targetResource }}',
'{{ postureId }}',
'{{ postureRevisionId }}',
'{{ description }}',
'{{ etag }}',
'{{ annotations }}',
'{{ organizationsId }}',
'{{ locationsId }}',
'{{ postureDeploymentId }}'
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
- name: posture_deployments
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the posture_deployments resource.
    - name: locationsId
      value: string
      description: Required parameter for the posture_deployments resource.
    - name: name
      value: string
      description: >
        Required. Identifier. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{deployment_id}`.
        
    - name: targetResource
      value: string
      description: >
        Required. The organization, folder, or project where the posture is deployed. Uses one of the following formats: * `organizations/{organization_number}` * `folders/{folder_number}` * `projects/{project_number}`
        
    - name: postureId
      value: string
      description: >
        Required. The posture used in the deployment, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
        
    - name: postureRevisionId
      value: string
      description: >
        Required. The revision ID of the posture used in the deployment.
        
    - name: description
      value: string
      description: >
        Optional. A description of the posture deployment.
        
    - name: etag
      value: string
      description: >
        Optional. An opaque identifier for the current version of the posture deployment. To prevent concurrent updates from overwriting each other, always provide the `etag` when you update a posture deployment. You can also provide the `etag` when you delete a posture deployment, to help ensure that you're deleting the intended posture deployment.
        
    - name: annotations
      value: object
      description: >
        Optional. The user-specified annotations for the posture deployment. For details about the values you can use in an annotation, see [AIP-148: Standard fields](https://google.aip.dev/148#annotations).
        
    - name: postureDeploymentId
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

Updates an existing PostureDeployment. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture deployment: 1. Call GetPostureDeployment to get the current version of the deployment. 2. Update the fields in the deployment as needed. 3. Call UpdatePostureDeployment to update the deployment. Ensure that your request includes the `etag` value from the GetPostureDeployment response. **Important:** If you omit the `etag` when you call UpdatePostureDeployment, then the updated deployment unconditionally overwrites the existing deployment.

```sql
UPDATE google.securityposture.posture_deployments
SET 
data__name = '{{ name }}',
data__targetResource = '{{ targetResource }}',
data__postureId = '{{ postureId }}',
data__postureRevisionId = '{{ postureRevisionId }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND postureDeploymentsId = '{{ postureDeploymentsId }}' --required
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

Deletes a PostureDeployment.

```sql
DELETE FROM google.securityposture.posture_deployments
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND postureDeploymentsId = '{{ postureDeploymentsId }}' --required
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
