--- 
title: deployment_resource_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_resource_pools
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>deployment_resource_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployment_resource_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.deployment_resource_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_deployed_models', value: 'query_deployed_models' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A description of resources that can be shared by multiple DeployedModels, whose underlying specification consists of a DedicatedResources.

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
    <td>Immutable. The resource name of the DeploymentResourcePool. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deploymentResourcePools/&#123;deployment_resource_pool&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this DeploymentResourcePool was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedResources" /></td>
    <td><code>object</code></td>
    <td>Required. The underlying DedicatedResources that the DeploymentResourcePool uses. (id: GoogleCloudAiplatformV1DedicatedResources)</td>
</tr>
<tr>
    <td><CopyableCode code="disableContainerLogging" /></td>
    <td><code>boolean</code></td>
    <td>If the DeploymentResourcePool is deployed with custom-trained Models or AutoML Tabular Models, the container(s) of the DeploymentResourcePool will send `stderr` and `stdout` streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging/pricing). User can disable container logging by setting this flag to true.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a DeploymentResourcePool. If set, this DeploymentResourcePool will be secured by this key. Endpoints and the DeploymentResourcePool they deploy in need to have the same EncryptionSpec. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account that the DeploymentResourcePool's container(s) run as. Specify the email address of the service account. If this service account is not specified, the container(s) run as a service account that doesn't have access to the resource project. Users deploying the Models to this DeploymentResourcePool must have the `iam.serviceAccounts.actAs` permission on this service account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_deployed_models">

Response message for QueryDeployedModels method.

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
    <td><CopyableCode code="deployedModelRefs" /></td>
    <td><code>array</code></td>
    <td>References to the DeployedModels that share the specified deploymentResourcePool.</td>
</tr>
<tr>
    <td><CopyableCode code="deployedModels" /></td>
    <td><code>array</code></td>
    <td>DEPRECATED Use deployed_model_refs instead.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
</tr>
<tr>
    <td><CopyableCode code="totalDeployedModelCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of DeployedModels on this DeploymentResourcePool.</td>
</tr>
<tr>
    <td><CopyableCode code="totalEndpointCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of Endpoints that have DeployedModels on this DeploymentResourcePool.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for ListDeploymentResourcePools method.

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
    <td><CopyableCode code="deploymentResourcePools" /></td>
    <td><code>array</code></td>
    <td>The DeploymentResourcePools from the specified location.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentResourcePoolsId"><code>deploymentResourcePoolsId</code></a></td>
    <td></td>
    <td>Get a DeploymentResourcePool.</td>
</tr>
<tr>
    <td><a href="#query_deployed_models"><CopyableCode code="query_deployed_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentResourcePoolsId"><code>deploymentResourcePoolsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List DeployedModels that have been deployed on this DeploymentResourcePool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List DeploymentResourcePools in a location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a DeploymentResourcePool.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentResourcePoolsId"><code>deploymentResourcePoolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a DeploymentResourcePool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentResourcePoolsId"><code>deploymentResourcePoolsId</code></a></td>
    <td></td>
    <td>Delete a DeploymentResourcePool.</td>
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
<tr id="parameter-deploymentResourcePoolsId">
    <td><CopyableCode code="deploymentResourcePoolsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_deployed_models', value: 'query_deployed_models' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a DeploymentResourcePool.

```sql
SELECT
name,
createTime,
dedicatedResources,
disableContainerLogging,
encryptionSpec,
satisfiesPzi,
satisfiesPzs,
serviceAccount
FROM google.aiplatform.deployment_resource_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentResourcePoolsId = '{{ deploymentResourcePoolsId }}' -- required;
```
</TabItem>
<TabItem value="query_deployed_models">

List DeployedModels that have been deployed on this DeploymentResourcePool.

```sql
SELECT
deployedModelRefs,
deployedModels,
nextPageToken,
totalDeployedModelCount,
totalEndpointCount
FROM google.aiplatform.deployment_resource_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentResourcePoolsId = '{{ deploymentResourcePoolsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
<TabItem value="list">

List DeploymentResourcePools in a location.

```sql
SELECT
deploymentResourcePools,
nextPageToken
FROM google.aiplatform.deployment_resource_pools
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

Create a DeploymentResourcePool.

```sql
INSERT INTO google.aiplatform.deployment_resource_pools (
data__deploymentResourcePool,
data__deploymentResourcePoolId,
projectsId,
locationsId
)
SELECT 
'{{ deploymentResourcePool }}',
'{{ deploymentResourcePoolId }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
- name: deployment_resource_pools
  props:
    - name: projectsId
      value: string
      description: Required parameter for the deployment_resource_pools resource.
    - name: locationsId
      value: string
      description: Required parameter for the deployment_resource_pools resource.
    - name: deploymentResourcePool
      value: object
      description: >
        Required. The DeploymentResourcePool to create.
        
    - name: deploymentResourcePoolId
      value: string
      description: >
        Required. The ID to use for the DeploymentResourcePool, which will become the final component of the DeploymentResourcePool's resource name. The maximum length is 63 characters, and valid characters are `/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/`.
        
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

Update a DeploymentResourcePool.

```sql
UPDATE google.aiplatform.deployment_resource_pools
SET 
data__name = '{{ name }}',
data__dedicatedResources = '{{ dedicatedResources }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__serviceAccount = '{{ serviceAccount }}',
data__disableContainerLogging = {{ disableContainerLogging }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentResourcePoolsId = '{{ deploymentResourcePoolsId }}' --required
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

Delete a DeploymentResourcePool.

```sql
DELETE FROM google.aiplatform.deployment_resource_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentResourcePoolsId = '{{ deploymentResourcePoolsId }}' --required;
```
</TabItem>
</Tabs>
