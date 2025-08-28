--- 
title: devices_signed
hide_title: false
hide_table_of_contents: false
keywords:
  - devices_signed
  - sasportal
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

Creates, updates, deletes, gets or lists a <code>devices_signed</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>devices_signed</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sasportal.devices_signed" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#customers_nodes_devices_create_signed"><CopyableCode code="customers_nodes_devices_create_signed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a signed device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_devices_create_signed"><CopyableCode code="customers_deployments_devices_create_signed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Creates a signed device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_devices_create_signed"><CopyableCode code="nodes_nodes_devices_create_signed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td></td>
    <td>Creates a signed device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_devices_create_signed"><CopyableCode code="nodes_deployments_devices_create_signed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Creates a signed device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_devices_create_signed"><CopyableCode code="customers_devices_create_signed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates a signed device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_create_signed"><CopyableCode code="nodes_devices_create_signed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a signed device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_devices_update_signed"><CopyableCode code="customers_devices_update_signed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Updates a signed device.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_update_signed"><CopyableCode code="nodes_devices_update_signed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Updates a signed device.</td>
</tr>
<tr>
    <td><a href="#deployments_devices_update_signed"><CopyableCode code="deployments_devices_update_signed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Updates a signed device.</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-devicesId">
    <td><CopyableCode code="devicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodesId">
    <td><CopyableCode code="nodesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodesId1">
    <td><CopyableCode code="nodesId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="customers_nodes_devices_create_signed"
    values={[
        { label: 'customers_nodes_devices_create_signed', value: 'customers_nodes_devices_create_signed' },
        { label: 'customers_deployments_devices_create_signed', value: 'customers_deployments_devices_create_signed' },
        { label: 'nodes_nodes_devices_create_signed', value: 'nodes_nodes_devices_create_signed' },
        { label: 'nodes_deployments_devices_create_signed', value: 'nodes_deployments_devices_create_signed' },
        { label: 'customers_devices_create_signed', value: 'customers_devices_create_signed' },
        { label: 'nodes_devices_create_signed', value: 'nodes_devices_create_signed' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="customers_nodes_devices_create_signed">

Creates a signed device under a node or customer.

```sql
INSERT INTO google.sasportal.devices_signed (
data__encodedDevice,
data__installerId,
customersId,
nodesId
)
SELECT 
'{{ encodedDevice }}',
'{{ installerId }}',
'{{ customersId }}',
'{{ nodesId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="customers_deployments_devices_create_signed">

Creates a signed device under a node or customer.

```sql
INSERT INTO google.sasportal.devices_signed (
data__encodedDevice,
data__installerId,
customersId,
deploymentsId
)
SELECT 
'{{ encodedDevice }}',
'{{ installerId }}',
'{{ customersId }}',
'{{ deploymentsId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="nodes_nodes_devices_create_signed">

Creates a signed device under a node or customer.

```sql
INSERT INTO google.sasportal.devices_signed (
data__encodedDevice,
data__installerId,
nodesId,
nodesId1
)
SELECT 
'{{ encodedDevice }}',
'{{ installerId }}',
'{{ nodesId }}',
'{{ nodesId1 }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="nodes_deployments_devices_create_signed">

Creates a signed device under a node or customer.

```sql
INSERT INTO google.sasportal.devices_signed (
data__encodedDevice,
data__installerId,
nodesId,
deploymentsId
)
SELECT 
'{{ encodedDevice }}',
'{{ installerId }}',
'{{ nodesId }}',
'{{ deploymentsId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="customers_devices_create_signed">

Creates a signed device under a node or customer.

```sql
INSERT INTO google.sasportal.devices_signed (
data__encodedDevice,
data__installerId,
customersId
)
SELECT 
'{{ encodedDevice }}',
'{{ installerId }}',
'{{ customersId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="nodes_devices_create_signed">

Creates a signed device under a node or customer.

```sql
INSERT INTO google.sasportal.devices_signed (
data__encodedDevice,
data__installerId,
nodesId
)
SELECT 
'{{ encodedDevice }}',
'{{ installerId }}',
'{{ nodesId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: devices_signed
  props:
    - name: customersId
      value: string
      description: Required parameter for the devices_signed resource.
    - name: nodesId
      value: string
      description: Required parameter for the devices_signed resource.
    - name: deploymentsId
      value: string
      description: Required parameter for the devices_signed resource.
    - name: nodesId1
      value: string
      description: Required parameter for the devices_signed resource.
    - name: encodedDevice
      value: string
      description: >
        Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.
        
    - name: installerId
      value: string
      description: >
        Required. Unique installer id (CPI ID) from the Certified Professional Installers database.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="customers_devices_update_signed"
    values={[
        { label: 'customers_devices_update_signed', value: 'customers_devices_update_signed' },
        { label: 'nodes_devices_update_signed', value: 'nodes_devices_update_signed' },
        { label: 'deployments_devices_update_signed', value: 'deployments_devices_update_signed' }
    ]}
>
<TabItem value="customers_devices_update_signed">

Updates a signed device.

```sql
UPDATE google.sasportal.devices_signed
SET 
data__encodedDevice = '{{ encodedDevice }}',
data__installerId = '{{ installerId }}'
WHERE 
customersId = '{{ customersId }}' --required
AND devicesId = '{{ devicesId }}' --required
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state;
```
</TabItem>
<TabItem value="nodes_devices_update_signed">

Updates a signed device.

```sql
UPDATE google.sasportal.devices_signed
SET 
data__encodedDevice = '{{ encodedDevice }}',
data__installerId = '{{ installerId }}'
WHERE 
nodesId = '{{ nodesId }}' --required
AND devicesId = '{{ devicesId }}' --required
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state;
```
</TabItem>
<TabItem value="deployments_devices_update_signed">

Updates a signed device.

```sql
UPDATE google.sasportal.devices_signed
SET 
data__encodedDevice = '{{ encodedDevice }}',
data__installerId = '{{ installerId }}'
WHERE 
deploymentsId = '{{ deploymentsId }}' --required
AND devicesId = '{{ devicesId }}' --required
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state;
```
</TabItem>
</Tabs>
