--- 
title: dns_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_zones
  - servicenetworking
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.dns_zones" /></td></tr>
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

Represents managed DNS zones created in the shared Producer host and consumer projects.

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
    <td><CopyableCode code="consumerPeeringZone" /></td>
    <td><code>object</code></td>
    <td>The DNS peering zone created in the consumer project. (id: DnsZone)</td>
</tr>
<tr>
    <td><CopyableCode code="producerPrivateZone" /></td>
    <td><code>object</code></td>
    <td>The private DNS zone created in the shared producer host project. (id: DnsZone)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents all DNS zones in the shared producer host project and the matching peering zones in the consumer project.

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
    <td><CopyableCode code="dnsZonePairs" /></td>
    <td><code>array</code></td>
    <td>All pairs of private DNS zones in the shared producer host project and the matching peering zones in the consumer project..</td>
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
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a>, <a href="#parameter-dnsZonesId"><code>dnsZonesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to retrieve a DNS zone in the shared producer host project and the matching peering zones in consumer project</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-networksId"><code>networksId</code></a></td>
    <td></td>
    <td>* Service producers can use this method to retrieve a list of available DNS zones in the shared producer host project and the matching peering zones in the consumer project. *</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.</td>
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
<tr id="parameter-networksId">
    <td><CopyableCode code="networksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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

Service producers can use this method to retrieve a DNS zone in the shared producer host project and the matching peering zones in consumer project

```sql
SELECT
consumerPeeringZone,
producerPrivateZone
FROM google.servicenetworking.dns_zones
WHERE servicesId = '{{ servicesId }}' -- required
AND projectsId = '{{ projectsId }}' -- required
AND networksId = '{{ networksId }}' -- required
AND dnsZonesId = '{{ dnsZonesId }}' -- required;
```
</TabItem>
<TabItem value="list">

* Service producers can use this method to retrieve a list of available DNS zones in the shared producer host project and the matching peering zones in the consumer project. *

```sql
SELECT
dnsZonePairs
FROM google.servicenetworking.dns_zones
WHERE servicesId = '{{ servicesId }}' -- required
AND projectsId = '{{ projectsId }}' -- required
AND networksId = '{{ networksId }}' -- required;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add">

Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.

```sql
INSERT INTO google.servicenetworking.dns_zones (
data__consumerNetwork,
data__name,
data__dnsSuffix,
servicesId
)
SELECT 
'{{ consumerNetwork }}',
'{{ name }}',
'{{ dnsSuffix }}',
'{{ servicesId }}'
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
    - name: servicesId
      value: string
      description: Required parameter for the dns_zones resource.
    - name: consumerNetwork
      value: string
      description: >
        Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in '12345' {network} is the network name.
        
    - name: name
      value: string
      description: >
        Required. The name for both the private zone in the shared producer host project and the peering zone in the consumer project. Must be unique within both projects. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
        
    - name: dnsSuffix
      value: string
      description: >
        Required. The DNS name suffix for the zones e.g. `example.com.`. Cloud DNS requires that a DNS suffix ends with a trailing dot.
        
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove"
    values={[
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="remove">

Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.

```sql
DELETE FROM google.servicenetworking.dns_zones
WHERE servicesId = '{{ servicesId }}' --required;
```
</TabItem>
</Tabs>
