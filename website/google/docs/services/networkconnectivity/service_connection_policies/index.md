--- 
title: service_connection_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_connection_policies
  - networkconnectivity
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

Creates, updates, deletes, gets or lists a <code>service_connection_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>service_connection_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.service_connection_policies" /></td></tr>
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
    <td>Immutable. The name of a ServiceConnectionPolicy. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/serviceConnectionPolicies/&#123;service_connection_policy&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the ServiceConnectionPolicy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of underlying resources used to create the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The resource path of the consumer network. Example: - projects/&#123;projectNumOrId&#125;/global/networks/&#123;resourceId&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration used for Private Service Connect connections. Used when Infrastructure is PSC. (id: PscConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output only] Information about each Private Service Connect connection.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceClass" /></td>
    <td><code>string</code></td>
    <td>The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp or google-cloud. For example, gcp-memorystore-redis or google-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the ServiceConnectionPolicy was updated.</td>
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
    <td>Immutable. The name of a ServiceConnectionPolicy. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/serviceConnectionPolicies/&#123;service_connection_policy&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the ServiceConnectionPolicy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of underlying resources used to create the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The resource path of the consumer network. Example: - projects/&#123;projectNumOrId&#125;/global/networks/&#123;resourceId&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration used for Private Service Connect connections. Used when Infrastructure is PSC. (id: PscConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output only] Information about each Private Service Connect connection.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceClass" /></td>
    <td><code>string</code></td>
    <td>The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp or google-cloud. For example, gcp-memorystore-redis or google-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the ServiceConnectionPolicy was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceConnectionPoliciesId"><code>serviceConnectionPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single ServiceConnectionPolicy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ServiceConnectionPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-serviceConnectionPolicyId"><code>serviceConnectionPolicyId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ServiceConnectionPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceConnectionPoliciesId"><code>serviceConnectionPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single ServiceConnectionPolicy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-serviceConnectionPoliciesId"><code>serviceConnectionPoliciesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single ServiceConnectionPolicy.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceConnectionPoliciesId">
    <td><CopyableCode code="serviceConnectionPoliciesId" /></td>
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
<tr id="parameter-serviceConnectionPolicyId">
    <td><CopyableCode code="serviceConnectionPolicyId" /></td>
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

Gets details of a single ServiceConnectionPolicy.

```sql
SELECT
name,
createTime,
description,
etag,
infrastructure,
labels,
network,
pscConfig,
pscConnections,
serviceClass,
updateTime
FROM google.networkconnectivity.service_connection_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND serviceConnectionPoliciesId = '{{ serviceConnectionPoliciesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists ServiceConnectionPolicies in a given project and location.

```sql
SELECT
name,
createTime,
description,
etag,
infrastructure,
labels,
network,
pscConfig,
pscConnections,
serviceClass,
updateTime
FROM google.networkconnectivity.service_connection_policies
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new ServiceConnectionPolicy in a given project and location.

```sql
INSERT INTO google.networkconnectivity.service_connection_policies (
data__name,
data__labels,
data__description,
data__network,
data__serviceClass,
data__pscConfig,
data__etag,
projectsId,
locationsId,
serviceConnectionPolicyId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ network }}',
'{{ serviceClass }}',
'{{ pscConfig }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ serviceConnectionPolicyId }}',
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
- name: service_connection_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the service_connection_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the service_connection_policies resource.
    - name: name
      value: string
      description: >
        Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
        
    - name: labels
      value: object
      description: >
        User-defined labels.
        
    - name: description
      value: string
      description: >
        A description of this resource.
        
    - name: network
      value: string
      description: >
        The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
        
    - name: serviceClass
      value: string
      description: >
        The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp or google-cloud. For example, gcp-memorystore-redis or google-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
        
    - name: pscConfig
      value: object
      description: >
        Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.
        
    - name: etag
      value: string
      description: >
        Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
        
    - name: serviceConnectionPolicyId
      value: string
    - name: requestId
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

Updates the parameters of a single ServiceConnectionPolicy.

```sql
UPDATE google.networkconnectivity.service_connection_policies
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__network = '{{ network }}',
data__serviceClass = '{{ serviceClass }}',
data__pscConfig = '{{ pscConfig }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serviceConnectionPoliciesId = '{{ serviceConnectionPoliciesId }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a single ServiceConnectionPolicy.

```sql
DELETE FROM google.networkconnectivity.service_connection_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND serviceConnectionPoliciesId = '{{ serviceConnectionPoliciesId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}';
```
</TabItem>
</Tabs>
