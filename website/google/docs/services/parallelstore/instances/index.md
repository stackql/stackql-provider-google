--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - parallelstore
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.parallelstore.instances" /></td></tr>
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
    <td>Identifier. The resource name of the instance, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessPoints" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of IPv4 addresses used for client side configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Immutable. The instance's storage capacity in Gibibytes (GiB). Allowed values are between 12000 and 100000, in multiples of 4000; e.g., 12000, 16000, 20000, ...</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="daosVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: The version of DAOS software running in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The deployment type of the instance. Allowed values are: * `SCRATCH`: the instance is a scratch instance. * `PERSISTENT`: the instance is a persistent instance.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the instance. 2048 characters or less.</td>
</tr>
<tr>
    <td><CopyableCode code="directoryStripeLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Stripe level for directories. Allowed values are: * `DIRECTORY_STRIPE_LEVEL_MIN`: recommended when directories contain a small number of files. * `DIRECTORY_STRIPE_LEVEL_BALANCED`: balances performance for workloads involving a mix of small and large directories. * `DIRECTORY_STRIPE_LEVEL_MAX`: recommended for directories with a large number of files.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveReservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The ID of the IP address range being used by the instance's VPC network. This field is populated by the service and contains the value currently used by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStripeLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Stripe level for files. Allowed values are: * `FILE_STRIPE_LEVEL_MIN`: offers the best performance for small size files. * `FILE_STRIPE_LEVEL_BALANCED`: balances performance for workloads involving a mix of small and large files. * `FILE_STRIPE_LEVEL_MAX`: higher throughput performance for larger files.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. See https://cloud.google.com/resource-manager/docs/labels-overview for details.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The ID of the IP address range being used by the instance's VPC network. See [Configure a VPC network](https://cloud.google.com/parallelstore/docs/vpc#create_and_configure_the_vpc). If no ID is provided, all ranges are considered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
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
    <td>Identifier. The resource name of the instance, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessPoints" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of IPv4 addresses used for client side configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityGib" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Immutable. The instance's storage capacity in Gibibytes (GiB). Allowed values are between 12000 and 100000, in multiples of 4000; e.g., 12000, 16000, 20000, ...</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="daosVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: The version of DAOS software running in the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The deployment type of the instance. Allowed values are: * `SCRATCH`: the instance is a scratch instance. * `PERSISTENT`: the instance is a persistent instance.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the instance. 2048 characters or less.</td>
</tr>
<tr>
    <td><CopyableCode code="directoryStripeLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Stripe level for directories. Allowed values are: * `DIRECTORY_STRIPE_LEVEL_MIN`: recommended when directories contain a small number of files. * `DIRECTORY_STRIPE_LEVEL_BALANCED`: balances performance for workloads involving a mix of small and large directories. * `DIRECTORY_STRIPE_LEVEL_MAX`: recommended for directories with a large number of files.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveReservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The ID of the IP address range being used by the instance's VPC network. This field is populated by the service and contains the value currently used by the service.</td>
</tr>
<tr>
    <td><CopyableCode code="fileStripeLevel" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Stripe level for files. Allowed values are: * `FILE_STRIPE_LEVEL_MIN`: offers the best performance for small size files. * `FILE_STRIPE_LEVEL_BALANCED`: balances performance for workloads involving a mix of small and large files. * `FILE_STRIPE_LEVEL_MAX`: higher throughput performance for larger files.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. See https://cloud.google.com/resource-manager/docs/labels-overview for details.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The ID of the IP address range being used by the instance's VPC network. See [Configure a VPC network](https://cloud.google.com/parallelstore/docs/vpc#create_and_configure_the_vpc). If no ID is provided, all ranges are considered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The instance state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets details of a single instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all instances in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Parallelstore instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single instance.</td>
</tr>
<tr>
    <td><a href="#import_data"><CopyableCode code="import_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Copies data from Cloud Storage to Parallelstore.</td>
</tr>
<tr>
    <td><a href="#export_data"><CopyableCode code="export_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Copies data from Parallelstore to Cloud Storage.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single instance.

```sql
SELECT
name,
accessPoints,
capacityGib,
createTime,
daosVersion,
deploymentType,
description,
directoryStripeLevel,
effectiveReservedIpRange,
fileStripeLevel,
labels,
network,
reservedIpRange,
state,
updateTime
FROM google.parallelstore.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists all instances in a given project and location.

```sql
SELECT
name,
accessPoints,
capacityGib,
createTime,
daosVersion,
deploymentType,
description,
directoryStripeLevel,
effectiveReservedIpRange,
fileStripeLevel,
labels,
network,
reservedIpRange,
state,
updateTime
FROM google.parallelstore.instances
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

Creates a Parallelstore instance in a given project and location.

```sql
INSERT INTO google.parallelstore.instances (
data__name,
data__description,
data__labels,
data__capacityGib,
data__network,
data__reservedIpRange,
data__fileStripeLevel,
data__directoryStripeLevel,
data__deploymentType,
projectsId,
locationsId,
instanceId,
requestId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ labels }}',
'{{ capacityGib }}',
'{{ network }}',
'{{ reservedIpRange }}',
'{{ fileStripeLevel }}',
'{{ directoryStripeLevel }}',
'{{ deploymentType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}',
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
- name: instances
  props:
    - name: projectsId
      value: string
      description: Required parameter for the instances resource.
    - name: locationsId
      value: string
      description: Required parameter for the instances resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance_id}`.
        
    - name: description
      value: string
      description: >
        Optional. The description of the instance. 2048 characters or less.
        
    - name: labels
      value: object
      description: >
        Optional. Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. See https://cloud.google.com/resource-manager/docs/labels-overview for details.
        
    - name: capacityGib
      value: string
      description: >
        Required. Immutable. The instance's storage capacity in Gibibytes (GiB). Allowed values are between 12000 and 100000, in multiples of 4000; e.g., 12000, 16000, 20000, ...
        
    - name: network
      value: string
      description: >
        Optional. Immutable. The name of the Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.
        
    - name: reservedIpRange
      value: string
      description: >
        Optional. Immutable. The ID of the IP address range being used by the instance's VPC network. See [Configure a VPC network](https://cloud.google.com/parallelstore/docs/vpc#create_and_configure_the_vpc). If no ID is provided, all ranges are considered.
        
    - name: fileStripeLevel
      value: string
      description: >
        Optional. Immutable. Stripe level for files. Allowed values are: * `FILE_STRIPE_LEVEL_MIN`: offers the best performance for small size files. * `FILE_STRIPE_LEVEL_BALANCED`: balances performance for workloads involving a mix of small and large files. * `FILE_STRIPE_LEVEL_MAX`: higher throughput performance for larger files.
        
      valid_values: ['FILE_STRIPE_LEVEL_UNSPECIFIED', 'FILE_STRIPE_LEVEL_MIN', 'FILE_STRIPE_LEVEL_BALANCED', 'FILE_STRIPE_LEVEL_MAX']
    - name: directoryStripeLevel
      value: string
      description: >
        Optional. Immutable. Stripe level for directories. Allowed values are: * `DIRECTORY_STRIPE_LEVEL_MIN`: recommended when directories contain a small number of files. * `DIRECTORY_STRIPE_LEVEL_BALANCED`: balances performance for workloads involving a mix of small and large directories. * `DIRECTORY_STRIPE_LEVEL_MAX`: recommended for directories with a large number of files.
        
      valid_values: ['DIRECTORY_STRIPE_LEVEL_UNSPECIFIED', 'DIRECTORY_STRIPE_LEVEL_MIN', 'DIRECTORY_STRIPE_LEVEL_BALANCED', 'DIRECTORY_STRIPE_LEVEL_MAX']
    - name: deploymentType
      value: string
      description: >
        Optional. Immutable. The deployment type of the instance. Allowed values are: * `SCRATCH`: the instance is a scratch instance. * `PERSISTENT`: the instance is a persistent instance.
        
      valid_values: ['DEPLOYMENT_TYPE_UNSPECIFIED', 'SCRATCH', 'PERSISTENT']
    - name: instanceId
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

Updates the parameters of a single instance.

```sql
UPDATE google.parallelstore.instances
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__capacityGib = '{{ capacityGib }}',
data__network = '{{ network }}',
data__reservedIpRange = '{{ reservedIpRange }}',
data__fileStripeLevel = '{{ fileStripeLevel }}',
data__directoryStripeLevel = '{{ directoryStripeLevel }}',
data__deploymentType = '{{ deploymentType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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

Deletes a single instance.

```sql
DELETE FROM google.parallelstore.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_data"
    values={[
        { label: 'import_data', value: 'import_data' },
        { label: 'export_data', value: 'export_data' }
    ]}
>
<TabItem value="import_data">

Copies data from Cloud Storage to Parallelstore.

```sql
EXEC google.parallelstore.instances.import_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"sourceGcsBucket": "{{ sourceGcsBucket }}", 
"destinationParallelstore": "{{ destinationParallelstore }}", 
"requestId": "{{ requestId }}", 
"serviceAccount": "{{ serviceAccount }}", 
"metadataOptions": "{{ metadataOptions }}"
}';
```
</TabItem>
<TabItem value="export_data">

Copies data from Parallelstore to Cloud Storage.

```sql
EXEC google.parallelstore.instances.export_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"sourceParallelstore": "{{ sourceParallelstore }}", 
"destinationGcsBucket": "{{ destinationGcsBucket }}", 
"requestId": "{{ requestId }}", 
"serviceAccount": "{{ serviceAccount }}", 
"metadataOptions": "{{ metadataOptions }}"
}';
```
</TabItem>
</Tabs>
