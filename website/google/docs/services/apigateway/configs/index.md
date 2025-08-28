--- 
title: configs
hide_title: false
hide_table_of_contents: false
keywords:
  - configs
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigateway.configs" /></td></tr>
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
    <td>Output only. Resource name of the API Config. Format: projects/&#123;project&#125;/locations/global/apis/&#123;api&#125;/configs/&#123;api_config&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Created time.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`&#123;ACCOUNT_ID&#125;@&#123;PROJECT&#125;.iam.gserviceaccount.com`) or its full resource name (`projects/&#123;PROJECT&#125;/accounts/&#123;UNIQUE_ID&#125;`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service.</td>
</tr>
<tr>
    <td><CopyableCode code="grpcServices" /></td>
    <td><code>array</code></td>
    <td>Optional. gRPC service definition files. If specified, openapi_documents must not be included.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="managedServiceConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.</td>
</tr>
<tr>
    <td><CopyableCode code="openapiDocuments" /></td>
    <td><code>array</code></td>
    <td>Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceConfigId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config).</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the API Config.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Updated time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Output only. Resource name of the API Config. Format: projects/&#123;project&#125;/locations/global/apis/&#123;api&#125;/configs/&#123;api_config&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Created time.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`&#123;ACCOUNT_ID&#125;@&#123;PROJECT&#125;.iam.gserviceaccount.com`) or its full resource name (`projects/&#123;PROJECT&#125;/accounts/&#123;UNIQUE_ID&#125;`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service.</td>
</tr>
<tr>
    <td><CopyableCode code="grpcServices" /></td>
    <td><code>array</code></td>
    <td>Optional. gRPC service definition files. If specified, openapi_documents must not be included.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="managedServiceConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.</td>
</tr>
<tr>
    <td><CopyableCode code="openapiDocuments" /></td>
    <td><code>array</code></td>
    <td>Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceConfigId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config).</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the API Config.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Updated time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-configsId"><code>configsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single ApiConfig.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ApiConfigs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td><a href="#parameter-apiConfigId"><code>apiConfigId</code></a></td>
    <td>Creates a new ApiConfig in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-configsId"><code>configsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single ApiConfig.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-configsId"><code>configsId</code></a></td>
    <td></td>
    <td>Deletes a single ApiConfig.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-configsId">
    <td><CopyableCode code="configsId" /></td>
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
<tr id="parameter-apiConfigId">
    <td><CopyableCode code="apiConfigId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
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

Gets details of a single ApiConfig.

```sql
SELECT
name,
createTime,
displayName,
gatewayServiceAccount,
grpcServices,
labels,
managedServiceConfigs,
openapiDocuments,
serviceConfigId,
state,
updateTime
FROM google.apigateway.configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND configsId = '{{ configsId }}' -- required
AND view = '{{ view }}';
```
</TabItem>
<TabItem value="list">

Lists ApiConfigs in a given project and location.

```sql
SELECT
name,
createTime,
displayName,
gatewayServiceAccount,
grpcServices,
labels,
managedServiceConfigs,
openapiDocuments,
serviceConfigId,
state,
updateTime
FROM google.apigateway.configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}';
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

Creates a new ApiConfig in a given project and location.

```sql
INSERT INTO google.apigateway.configs (
data__labels,
data__displayName,
data__gatewayServiceAccount,
data__openapiDocuments,
data__grpcServices,
data__managedServiceConfigs,
projectsId,
locationsId,
apisId,
apiConfigId
)
SELECT 
'{{ labels }}',
'{{ displayName }}',
'{{ gatewayServiceAccount }}',
'{{ openapiDocuments }}',
'{{ grpcServices }}',
'{{ managedServiceConfigs }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ apiConfigId }}'
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
- name: configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the configs resource.
    - name: apisId
      value: string
      description: Required parameter for the configs resource.
    - name: labels
      value: object
      description: >
        Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
        
    - name: displayName
      value: string
      description: >
        Optional. Display name.
        
    - name: gatewayServiceAccount
      value: string
      description: >
        Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account's email (`{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`) or its full resource name (`projects/{PROJECT}/accounts/{UNIQUE_ID}`). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service.
        
    - name: openapiDocuments
      value: array
      description: >
        Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included.
        
    - name: grpcServices
      value: array
      description: >
        Optional. gRPC service definition files. If specified, openapi_documents must not be included.
        
    - name: managedServiceConfigs
      value: array
      description: >
        Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields.
        
    - name: apiConfigId
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

Updates the parameters of a single ApiConfig.

```sql
UPDATE google.apigateway.configs
SET 
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__gatewayServiceAccount = '{{ gatewayServiceAccount }}',
data__openapiDocuments = '{{ openapiDocuments }}',
data__grpcServices = '{{ grpcServices }}',
data__managedServiceConfigs = '{{ managedServiceConfigs }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND configsId = '{{ configsId }}' --required
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

Deletes a single ApiConfig.

```sql
DELETE FROM google.apigateway.configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND configsId = '{{ configsId }}' --required;
```
</TabItem>
</Tabs>
