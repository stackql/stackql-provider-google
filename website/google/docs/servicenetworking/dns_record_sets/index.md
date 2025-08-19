--- 
title: dns_record_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_record_sets
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

Creates, updates, deletes, gets or lists a <code>dns_record_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_record_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicenetworking.dns_record_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Represents all DNS RecordSets associated with the producer network

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
    <td><CopyableCode code="dnsRecordSets" /></td>
    <td><code>array</code></td>
    <td>DNS record Set Resource</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-consumerNetwork"><code>consumerNetwork</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td>Producers can use this method to retrieve a list of available DNS RecordSets available inside the private zone on the tenant host project accessible from their network.</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-consumerNetwork">
    <td><CopyableCode code="consumerNetwork" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Producers can use this method to retrieve a list of available DNS RecordSets available inside the private zone on the tenant host project accessible from their network.

```sql
SELECT
dnsRecordSets
FROM google.servicenetworking.dns_record_sets
WHERE servicesId = '{{ servicesId }}' -- required
AND consumerNetwork = '{{ consumerNetwork }}'
AND zone = '{{ zone }}';
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

Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.

```sql
INSERT INTO google.servicenetworking.dns_record_sets (
data__consumerNetwork,
data__zone,
data__dnsRecordSet,
servicesId
)
SELECT 
'{{ consumerNetwork }}',
'{{ zone }}',
'{{ dnsRecordSet }}',
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
- name: dns_record_sets
  props:
    - name: servicesId
      value: string
      description: Required parameter for the dns_record_sets resource.
    - name: consumerNetwork
      value: string
      description: >
        Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in '12345' {network} is the network name.
        
    - name: zone
      value: string
      description: >
        Required. The name of the private DNS zone in the shared producer host project to which the record set will be added.
        
    - name: dnsRecordSet
      value: object
      description: >
        Required. The DNS record set to add.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.

```sql
UPDATE google.servicenetworking.dns_record_sets
SET 
data__consumerNetwork = '{{ consumerNetwork }}',
data__zone = '{{ zone }}',
data__existingDnsRecordSet = '{{ existingDnsRecordSet }}',
data__newDnsRecordSet = '{{ newDnsRecordSet }}'
WHERE 
servicesId = '{{ servicesId }}' --required
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
    defaultValue="remove"
    values={[
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="remove">

Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.

```sql
DELETE FROM google.servicenetworking.dns_record_sets
WHERE servicesId = '{{ servicesId }}' --required;
```
</TabItem>
</Tabs>
