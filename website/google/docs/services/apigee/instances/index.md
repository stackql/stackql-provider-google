--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - apigee
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_instances_get"
    values={[
        { label: 'organizations_instances_get', value: 'organizations_instances_get' },
        { label: 'organizations_instances_list', value: 'organizations_instances_list' }
    ]}
>
<TabItem value="organizations_instances_get">

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
    <td>Required. Resource ID of the instance. Values must match the regular expression `^a-z&#123;0,30&#125;[a-z\d]$`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging. (id: GoogleCloudApigeeV1AccessLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="consumerAcceptList" /></td>
    <td><code>array</code></td>
    <td>Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the instance was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="ipRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the instance was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Required. Compute Engine location where the instance resides.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringCidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Output only. Port number of the exposed Apigee endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAttachment" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the service attachment created for the instance in the format: `projects/*/regions/*/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_instances_list">

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
    <td>Required. Resource ID of the instance. Values must match the regular expression `^a-z&#123;0,30&#125;[a-z\d]$`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging. (id: GoogleCloudApigeeV1AccessLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="consumerAcceptList" /></td>
    <td><code>array</code></td>
    <td>Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the instance was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="ipRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time the instance was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Required. Compute Engine location where the instance resides.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringCidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Output only. Port number of the exposed Apigee endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAttachment" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the service attachment created for the instance in the format: `projects/*/regions/*/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.</td>
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
    <td><a href="#organizations_instances_get"><CopyableCode code="organizations_instances_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets the details for an Apigee runtime instance. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_list"><CopyableCode code="organizations_instances_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_create"><CopyableCode code="organizations_instances_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_patch"><CopyableCode code="organizations_instances_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_delete"><CopyableCode code="organizations_instances_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Deletes an Apigee runtime instance. The instance stops serving requests and the runtime data is deleted. **Note:** Not supported for Apigee hybrid.</td>
</tr>
<tr>
    <td><a href="#organizations_instances_report_status"><CopyableCode code="organizations_instances_report_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Reports the latest status for a runtime instance.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
    defaultValue="organizations_instances_get"
    values={[
        { label: 'organizations_instances_get', value: 'organizations_instances_get' },
        { label: 'organizations_instances_list', value: 'organizations_instances_list' }
    ]}
>
<TabItem value="organizations_instances_get">

Gets the details for an Apigee runtime instance. **Note:** Not supported for Apigee hybrid.

```sql
SELECT
name,
accessLoggingConfig,
consumerAcceptList,
createdAt,
description,
diskEncryptionKeyName,
displayName,
host,
ipRange,
lastModifiedAt,
location,
peeringCidrRange,
port,
runtimeVersion,
serviceAttachment,
state
FROM google.apigee.instances
WHERE organizationsId = '{{ organizationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_instances_list">

Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.

```sql
SELECT
name,
accessLoggingConfig,
consumerAcceptList,
createdAt,
description,
diskEncryptionKeyName,
displayName,
host,
ipRange,
lastModifiedAt,
location,
peeringCidrRange,
port,
runtimeVersion,
serviceAttachment,
state
FROM google.apigee.instances
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_instances_create"
    values={[
        { label: 'organizations_instances_create', value: 'organizations_instances_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_instances_create">

Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.

```sql
INSERT INTO google.apigee.instances (
data__name,
data__location,
data__peeringCidrRange,
data__description,
data__displayName,
data__diskEncryptionKeyName,
data__ipRange,
data__consumerAcceptList,
data__accessLoggingConfig,
organizationsId
)
SELECT 
'{{ name }}',
'{{ location }}',
'{{ peeringCidrRange }}',
'{{ description }}',
'{{ displayName }}',
'{{ diskEncryptionKeyName }}',
'{{ ipRange }}',
'{{ consumerAcceptList }}',
'{{ accessLoggingConfig }}',
'{{ organizationsId }}'
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
    - name: organizationsId
      value: string
      description: Required parameter for the instances resource.
    - name: name
      value: string
      description: >
        Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\d]$`.
        
    - name: location
      value: string
      description: >
        Required. Compute Engine location where the instance resides.
        
    - name: peeringCidrRange
      value: string
      description: >
        Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.
        
      valid_values: ['CIDR_RANGE_UNSPECIFIED', 'SLASH_16', 'SLASH_17', 'SLASH_18', 'SLASH_19', 'SLASH_20', 'SLASH_22', 'SLASH_23']
    - name: description
      value: string
      description: >
        Optional. Description of the instance.
        
    - name: displayName
      value: string
      description: >
        Optional. Display name for the instance.
        
    - name: diskEncryptionKeyName
      value: string
      description: >
        Optional. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`
        
    - name: ipRange
      value: string
      description: >
        Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`
        
    - name: consumerAcceptList
      value: array
      description: >
        Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.
        
    - name: accessLoggingConfig
      value: object
      description: >
        Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_instances_patch"
    values={[
        { label: 'organizations_instances_patch', value: 'organizations_instances_patch' }
    ]}
>
<TabItem value="organizations_instances_patch">

Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. **Note:** Not supported for Apigee hybrid.

```sql
UPDATE google.apigee.instances
SET 
data__name = '{{ name }}',
data__location = '{{ location }}',
data__peeringCidrRange = '{{ peeringCidrRange }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__diskEncryptionKeyName = '{{ diskEncryptionKeyName }}',
data__ipRange = '{{ ipRange }}',
data__consumerAcceptList = '{{ consumerAcceptList }}',
data__accessLoggingConfig = '{{ accessLoggingConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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
    defaultValue="organizations_instances_delete"
    values={[
        { label: 'organizations_instances_delete', value: 'organizations_instances_delete' }
    ]}
>
<TabItem value="organizations_instances_delete">

Deletes an Apigee runtime instance. The instance stops serving requests and the runtime data is deleted. **Note:** Not supported for Apigee hybrid.

```sql
DELETE FROM google.apigee.instances
WHERE organizationsId = '{{ organizationsId }}' --required
AND instancesId = '{{ instancesId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_instances_report_status"
    values={[
        { label: 'organizations_instances_report_status', value: 'organizations_instances_report_status' }
    ]}
>
<TabItem value="organizations_instances_report_status">

Reports the latest status for a runtime instance.

```sql
EXEC google.apigee.instances.organizations_instances_report_status 
@organizationsId='{{ organizationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"instanceUid": "{{ instanceUid }}", 
"reportTime": "{{ reportTime }}", 
"resources": "{{ resources }}"
}';
```
</TabItem>
</Tabs>
