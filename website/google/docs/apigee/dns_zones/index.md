--- 
title: dns_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_zones
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

Creates, updates, deletes, gets or lists a <code>dns_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_zones</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.dns_zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_dns_zones_get"
    values={[
        { label: 'organizations_dns_zones_get', value: 'organizations_dns_zones_get' },
        { label: 'organizations_dns_zones_list', value: 'organizations_dns_zones_list' }
    ]}
>
<TabItem value="organizations_dns_zones_get">

A DNS zone is a resource under an Apigee organization that is used to create a DNS peering with Apigee's network. DNS peering will let Apigee instances resolve the hostnames created in a peered network.

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
    <td>Identifier. Unique name for the resource. Defined by the server Format: "organizations/&#123;organization&#125;/dnsZones/&#123;dns_zone&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that this resource was created on the server.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Required. Description of the resource. String of at most 1024 characters associated with this resource for the user's convenience.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Required. The domain name for hosts in this private zone, for instance "example.com.".</td>
</tr>
<tr>
    <td><CopyableCode code="peeringConfig" /></td>
    <td><code>object</code></td>
    <td>DNS PEERING zone configuration. (id: GoogleCloudApigeeV1DnsZonePeeringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the DNS Peering. Values other than `ACTIVE` mean the resource is not ready to use.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that this resource was updated on the server.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_dns_zones_list">

Response for list DNS zones.

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
    <td><CopyableCode code="dnsZones" /></td>
    <td><code>array</code></td>
    <td>DNS zones in a given organization.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Page token that you can include in an `ListDnsZones` request to retrieve the next page. If omitted, no subsequent pages exist.</td>
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
    <td><a href="#organizations_dns_zones_get"><CopyableCode code="organizations_dns_zones_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-dnsZonesId"><code>dnsZonesId</code></a></td>
    <td></td>
    <td>Fetches the representation of an existing DNS zone.</td>
</tr>
<tr>
    <td><a href="#organizations_dns_zones_list"><CopyableCode code="organizations_dns_zones_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Enumerates DNS zones that have been created but not yet deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_dns_zones_create"><CopyableCode code="organizations_dns_zones_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-dnsZoneId"><code>dnsZoneId</code></a></td>
    <td>Creates a new DNS zone.</td>
</tr>
<tr>
    <td><a href="#organizations_dns_zones_delete"><CopyableCode code="organizations_dns_zones_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-dnsZonesId"><code>dnsZonesId</code></a></td>
    <td></td>
    <td>Deletes a previously created DNS zone.</td>
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
<tr id="parameter-dnsZonesId">
    <td><CopyableCode code="dnsZonesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dnsZoneId">
    <td><CopyableCode code="dnsZoneId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_dns_zones_get"
    values={[
        { label: 'organizations_dns_zones_get', value: 'organizations_dns_zones_get' },
        { label: 'organizations_dns_zones_list', value: 'organizations_dns_zones_list' }
    ]}
>
<TabItem value="organizations_dns_zones_get">

Fetches the representation of an existing DNS zone.

```sql
SELECT
name,
createTime,
description,
domain,
peeringConfig,
state,
updateTime
FROM google.apigee.dns_zones
WHERE organizationsId = '{{ organizationsId }}' -- required
AND dnsZonesId = '{{ dnsZonesId }}' -- required;
```
</TabItem>
<TabItem value="organizations_dns_zones_list">

Enumerates DNS zones that have been created but not yet deleted.

```sql
SELECT
dnsZones,
nextPageToken
FROM google.apigee.dns_zones
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_dns_zones_create"
    values={[
        { label: 'organizations_dns_zones_create', value: 'organizations_dns_zones_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_dns_zones_create">

Creates a new DNS zone.

```sql
INSERT INTO google.apigee.dns_zones (
data__name,
data__description,
data__domain,
data__peeringConfig,
organizationsId,
dnsZoneId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ domain }}',
'{{ peeringConfig }}',
'{{ organizationsId }}',
'{{ dnsZoneId }}'
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
- name: dns_zones
  props:
    - name: organizationsId
      value: string
      description: Required parameter for the dns_zones resource.
    - name: name
      value: string
      description: >
        Identifier. Unique name for the resource. Defined by the server Format: "organizations/{organization}/dnsZones/{dns_zone}".
        
    - name: description
      value: string
      description: >
        Required. Description of the resource. String of at most 1024 characters associated with this resource for the user's convenience.
        
    - name: domain
      value: string
      description: >
        Required. The domain name for hosts in this private zone, for instance "example.com.".
        
    - name: peeringConfig
      value: object
      description: >
        DNS PEERING zone configuration.
        
    - name: dnsZoneId
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_dns_zones_delete"
    values={[
        { label: 'organizations_dns_zones_delete', value: 'organizations_dns_zones_delete' }
    ]}
>
<TabItem value="organizations_dns_zones_delete">

Deletes a previously created DNS zone.

```sql
DELETE FROM google.apigee.dns_zones
WHERE organizationsId = '{{ organizationsId }}' --required
AND dnsZonesId = '{{ dnsZonesId }}' --required;
```
</TabItem>
</Tabs>
