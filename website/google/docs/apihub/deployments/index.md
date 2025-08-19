--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - apihub
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.deployments" /></td></tr>
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

Details of the deployment where APIs are hosted. A deployment could represent an Apigee proxy, API gateway, other Google Cloud services or non-Google Cloud services as well. A deployment entity is a root level entity in the API hub and exists independent of any API.

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
    <td>Identifier. The name of the deployment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="apiVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. The API versions linked to this deployment. Note: A particular deployment could be linked to multiple different API versions (of same or different APIs).</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`. The value is the attribute values associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Optional. The documentation of the deployment. (id: GoogleCloudApihubV1Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>Required. The endpoints at which this deployment resource is listening for API requests. This could be a list of complete URIs, hostnames or an IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="managementUrl" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to use the format: organizations/&#123;org&#125;/environments/&#123;env&#125;/apis/&#123;api&#125;. For ex: if a proxy with name `orders` is deployed in `staging` environment of `cymbal` organization, the resource URI would be: `organizations/cymbal/environments/staging/apis/orders`.</td>
</tr>
<tr>
    <td><CopyableCode code="slo" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceEnvironment" /></td>
    <td><code>string</code></td>
    <td>Optional. The environment at source for the deployment. For example: prod, dev, staging, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceMetadata" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of sources and metadata from the sources of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceProject" /></td>
    <td><code>string</code></td>
    <td>Optional. The project to which the deployment belongs. For GCP gateways, this will refer to the project identifier. For others like Edge/OPDK, this will refer to the org identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceUri" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the deployment was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The ListDeployments method's response.

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>The deployment resources present in the API hub.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Get details about a deployment and the API versions linked to it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List deployment resources in the API hub.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-deploymentId"><code>deploymentId</code></a></td>
    <td>Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with API versions.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a deployment resource in the API hub. The following fields in the deployment resource can be updated: * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment * attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to specify the fields being updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Delete a deployment resource in the API hub.</td>
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
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
<tr id="parameter-deploymentId">
    <td><CopyableCode code="deploymentId" /></td>
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

Get details about a deployment and the API versions linked to it.

```sql
SELECT
name,
apiVersions,
attributes,
createTime,
deploymentType,
description,
displayName,
documentation,
endpoints,
environment,
managementUrl,
resourceUri,
slo,
sourceEnvironment,
sourceMetadata,
sourceProject,
sourceUri,
updateTime
FROM google.apihub.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required;
```
</TabItem>
<TabItem value="list">

List deployment resources in the API hub.

```sql
SELECT
deployments,
nextPageToken
FROM google.apihub.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
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

Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with API versions.

```sql
INSERT INTO google.apihub.deployments (
data__name,
data__displayName,
data__description,
data__documentation,
data__deploymentType,
data__resourceUri,
data__endpoints,
data__slo,
data__environment,
data__attributes,
data__managementUrl,
data__sourceUri,
data__sourceProject,
data__sourceEnvironment,
projectsId,
locationsId,
deploymentId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ documentation }}',
'{{ deploymentType }}',
'{{ resourceUri }}',
'{{ endpoints }}',
'{{ slo }}',
'{{ environment }}',
'{{ attributes }}',
'{{ managementUrl }}',
'{{ sourceUri }}',
'{{ sourceProject }}',
'{{ sourceEnvironment }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deploymentId }}'
RETURNING
name,
apiVersions,
attributes,
createTime,
deploymentType,
description,
displayName,
documentation,
endpoints,
environment,
managementUrl,
resourceUri,
slo,
sourceEnvironment,
sourceMetadata,
sourceProject,
sourceUri,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: deployments
  props:
    - name: projectsId
      value: string
      description: Required parameter for the deployments resource.
    - name: locationsId
      value: string
      description: Required parameter for the deployments resource.
    - name: name
      value: string
      description: >
        Identifier. The name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}`
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the deployment.
        
    - name: description
      value: string
      description: >
        Optional. The description of the deployment.
        
    - name: documentation
      value: object
      description: >
        Optional. The documentation of the deployment.
        
    - name: deploymentType
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: resourceUri
      value: string
      description: >
        Required. The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to use the format: organizations/{org}/environments/{env}/apis/{api}. For ex: if a proxy with name `orders` is deployed in `staging` environment of `cymbal` organization, the resource URI would be: `organizations/cymbal/environments/staging/apis/orders`.
        
    - name: endpoints
      value: array
      description: >
        Required. The endpoints at which this deployment resource is listening for API requests. This could be a list of complete URIs, hostnames or an IP addresses.
        
    - name: slo
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: environment
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: attributes
      value: object
      description: >
        Optional. The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource.
        
    - name: managementUrl
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: sourceUri
      value: object
      description: >
        The attribute values associated with resource.
        
    - name: sourceProject
      value: string
      description: >
        Optional. The project to which the deployment belongs. For GCP gateways, this will refer to the project identifier. For others like Edge/OPDK, this will refer to the org identifier.
        
    - name: sourceEnvironment
      value: string
      description: >
        Optional. The environment at source for the deployment. For example: prod, dev, staging, etc.
        
    - name: deploymentId
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

Update a deployment resource in the API hub. The following fields in the deployment resource can be updated: * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment * attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to specify the fields being updated.

```sql
UPDATE google.apihub.deployments
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__documentation = '{{ documentation }}',
data__deploymentType = '{{ deploymentType }}',
data__resourceUri = '{{ resourceUri }}',
data__endpoints = '{{ endpoints }}',
data__slo = '{{ slo }}',
data__environment = '{{ environment }}',
data__attributes = '{{ attributes }}',
data__managementUrl = '{{ managementUrl }}',
data__sourceUri = '{{ sourceUri }}',
data__sourceProject = '{{ sourceProject }}',
data__sourceEnvironment = '{{ sourceEnvironment }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
apiVersions,
attributes,
createTime,
deploymentType,
description,
displayName,
documentation,
endpoints,
environment,
managementUrl,
resourceUri,
slo,
sourceEnvironment,
sourceMetadata,
sourceProject,
sourceUri,
updateTime;
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

Delete a deployment resource in the API hub.

```sql
DELETE FROM google.apihub.deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required;
```
</TabItem>
</Tabs>
