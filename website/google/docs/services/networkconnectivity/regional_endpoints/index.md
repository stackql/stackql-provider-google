--- 
title: regional_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - regional_endpoints
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

Creates, updates, deletes, gets or lists a <code>regional_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>regional_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.regional_endpoints" /></td></tr>
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
    <td>Output only. The name of a RegionalEndpoint. Pattern: `projects/&#123;project&#125;/locations/&#123;location&#125;/regionalEndpoints/^[-a-z0-9](?:[-a-z0-9]&#123;0,44&#125;)[a-z0-9]$`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessType" /></td>
    <td><code>string</code></td>
    <td>Required. The access type of this regional endpoint. This field is reflected in the PSC Forwarding Rule configuration to enable global access.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>Optional. The IP Address of the Regional Endpoint. When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in `10.0.0.1` * Address resource URI as in `projects/&#123;project&#125;/regions/&#123;region&#125;/addresses/&#123;address_name&#125;` for an IPv4 or IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the RegionalEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The literal IP address of the PSC Forwarding Rule created on behalf of the customer. This field is deprecated. Use address instead.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC network for this private regional endpoint. Format: `projects/&#123;project&#125;/global/networks/&#123;network&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="pscForwardingRule" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource reference of the PSC Forwarding Rule created on behalf of the customer. Format: `//compute.googleapis.com/projects/&#123;project&#125;/regions/&#123;region&#125;/forwardingRules/&#123;forwarding_rule_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the subnetwork from which the IP address will be allocated. Format: `projects/&#123;project&#125;/regions/&#123;region&#125;/subnetworks/&#123;subnetwork&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="targetGoogleApi" /></td>
    <td><code>string</code></td>
    <td>Required. The service endpoint this private regional endpoint connects to. Format: `&#123;apiname&#125;.&#123;region&#125;.p.rep.googleapis.com` Example: "cloudkms.us-central1.p.rep.googleapis.com".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the RegionalEndpoint was updated.</td>
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
    <td>Output only. The name of a RegionalEndpoint. Pattern: `projects/&#123;project&#125;/locations/&#123;location&#125;/regionalEndpoints/^[-a-z0-9](?:[-a-z0-9]&#123;0,44&#125;)[a-z0-9]$`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessType" /></td>
    <td><code>string</code></td>
    <td>Required. The access type of this regional endpoint. This field is reflected in the PSC Forwarding Rule configuration to enable global access.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>Optional. The IP Address of the Regional Endpoint. When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in `10.0.0.1` * Address resource URI as in `projects/&#123;project&#125;/regions/&#123;region&#125;/addresses/&#123;address_name&#125;` for an IPv4 or IPv6 address.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the RegionalEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The literal IP address of the PSC Forwarding Rule created on behalf of the customer. This field is deprecated. Use address instead.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC network for this private regional endpoint. Format: `projects/&#123;project&#125;/global/networks/&#123;network&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="pscForwardingRule" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource reference of the PSC Forwarding Rule created on behalf of the customer. Format: `//compute.googleapis.com/projects/&#123;project&#125;/regions/&#123;region&#125;/forwardingRules/&#123;forwarding_rule_name&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the subnetwork from which the IP address will be allocated. Format: `projects/&#123;project&#125;/regions/&#123;region&#125;/subnetworks/&#123;subnetwork&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="targetGoogleApi" /></td>
    <td><code>string</code></td>
    <td>Required. The service endpoint this private regional endpoint connects to. Format: `&#123;apiname&#125;.&#123;region&#125;.p.rep.googleapis.com` Example: "cloudkms.us-central1.p.rep.googleapis.com".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the RegionalEndpoint was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-regionalEndpointsId"><code>regionalEndpointsId</code></a></td>
    <td></td>
    <td>Gets details of a single RegionalEndpoint.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists RegionalEndpoints in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-regionalEndpointId"><code>regionalEndpointId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new RegionalEndpoint in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-regionalEndpointsId"><code>regionalEndpointsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single RegionalEndpoint.</td>
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
<tr id="parameter-regionalEndpointsId">
    <td><CopyableCode code="regionalEndpointsId" /></td>
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
<tr id="parameter-regionalEndpointId">
    <td><CopyableCode code="regionalEndpointId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets details of a single RegionalEndpoint.

```sql
SELECT
name,
accessType,
address,
createTime,
description,
ipAddress,
labels,
network,
pscForwardingRule,
subnetwork,
targetGoogleApi,
updateTime
FROM google.networkconnectivity.regional_endpoints
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND regionalEndpointsId = '{{ regionalEndpointsId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists RegionalEndpoints in a given project and location.

```sql
SELECT
name,
accessType,
address,
createTime,
description,
ipAddress,
labels,
network,
pscForwardingRule,
subnetwork,
targetGoogleApi,
updateTime
FROM google.networkconnectivity.regional_endpoints
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

Creates a new RegionalEndpoint in a given project and location.

```sql
INSERT INTO google.networkconnectivity.regional_endpoints (
data__labels,
data__description,
data__targetGoogleApi,
data__network,
data__subnetwork,
data__accessType,
data__address,
projectsId,
locationsId,
regionalEndpointId,
requestId
)
SELECT 
'{{ labels }}',
'{{ description }}',
'{{ targetGoogleApi }}',
'{{ network }}',
'{{ subnetwork }}',
'{{ accessType }}',
'{{ address }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ regionalEndpointId }}',
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
- name: regional_endpoints
  props:
    - name: projectsId
      value: string
      description: Required parameter for the regional_endpoints resource.
    - name: locationsId
      value: string
      description: Required parameter for the regional_endpoints resource.
    - name: labels
      value: object
      description: >
        User-defined labels.
        
    - name: description
      value: string
      description: >
        Optional. A description of this resource.
        
    - name: targetGoogleApi
      value: string
      description: >
        Required. The service endpoint this private regional endpoint connects to. Format: `{apiname}.{region}.p.rep.googleapis.com` Example: "cloudkms.us-central1.p.rep.googleapis.com".
        
    - name: network
      value: string
      description: >
        The name of the VPC network for this private regional endpoint. Format: `projects/{project}/global/networks/{network}`
        
    - name: subnetwork
      value: string
      description: >
        The name of the subnetwork from which the IP address will be allocated. Format: `projects/{project}/regions/{region}/subnetworks/{subnetwork}`
        
    - name: accessType
      value: string
      description: >
        Required. The access type of this regional endpoint. This field is reflected in the PSC Forwarding Rule configuration to enable global access.
        
      valid_values: ['ACCESS_TYPE_UNSPECIFIED', 'GLOBAL', 'REGIONAL']
    - name: address
      value: string
      description: >
        Optional. The IP Address of the Regional Endpoint. When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in `10.0.0.1` * Address resource URI as in `projects/{project}/regions/{region}/addresses/{address_name}` for an IPv4 or IPv6 address.
        
    - name: regionalEndpointId
      value: string
    - name: requestId
      value: string
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

Deletes a single RegionalEndpoint.

```sql
DELETE FROM google.networkconnectivity.regional_endpoints
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND regionalEndpointsId = '{{ regionalEndpointsId }}' --required
AND requestId = '{{ requestId }}';
```
</TabItem>
</Tabs>
